function Main(input) {
    let maxProbability = 0; //2つのサイコロの出目が等しくなる確率の最大値.
    const N = Number(input[0]); //サイコロの数.
    let K = []; //サイコロの面の数.
    let A = []; //サイコロの各面に書かれた数.
    let pipCount = [];
    for (let i = 0; i < N; i++) {
        K.push(Number(input[i + 1].split(" ")[0]));
        A.push(input[i + 1].split(" ").map(Number).slice(1));

        //各サイコロの出目ごとの個数.
        pipCount.push({});
        for (let j = 0; j < K[i]; j++) {
            pipCount[i][A[i][j]] = (pipCount[i][A[i][j]] || 0) + 1;
        }
    }

    for (let i = 0; i < N; i++) {   //1つ目のサイコロ.
        for (let j = 0; j < N; j++) {   // 2つ目のサイコロ.
            if (i < j) {
                // サイコロiとサイコロjの出目が等しくなるには、どちらのサイコロにも存在する面（出目）である必要があるため.
                let tempSet = new Set(A[i]);
                // tempSet = tempSet.intersection(new Set(A[j]));
                tempSet = intersection(tempSet, new Set(A[j]));
                let tempSetKey = tempSet.keys();
                // console.log(tempSet);
                let tempPip = [];
                let tempP = 0; //サイコロiとサイコロjの出目が等しくなる確率.
                for (let k = 0; k < tempSet.size; k++) {
                    tempPip.push(tempSetKey.next().value);
                    tempP += (pipCount[i][tempPip[k]] / K[i]) * pipCount[j][tempPip[k]] / K[j]; //出目がtempPip[k]で同じになる確率.
                }

                maxProbability = Math.max(maxProbability, tempP);
            }
        }
    }

    console.log(maxProbability);
    // console.log(Math.round(maxProbability * (10 ** 15)) / (10 ** 15));
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));