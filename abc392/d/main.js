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
                let tempP = 0; //サイコロiとサイコロjの出目が等しくなる確率.
                for (elem in pipCount[i]) {

                    let tempP_i = pipCount[i][elem] / K[i]; //サイコロiの出目がelemになる確率.
                    let tempP_j = (pipCount[j][elem] == undefined ? 0 : pipCount[j][elem] / K[j]); //サイコロjの出目がelemになる確率.

                    tempP += tempP_i * tempP_j; //出目がelemで同じになる確率.
                }
                maxProbability = Math.max(maxProbability, tempP);
            }
        }
    }

    console.log(maxProbability);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));