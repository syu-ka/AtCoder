function Main(input) {
    const N = Number(input[0]);
    let C = [];
    let canRemove = true;
    let iMin = []; //iMin[3] = 2; は 3列目の(2-1)行目まではoが無い.
    let iMax = []; //iMax[12] = 17; は 12列目の(17+1)行以降(17+1行含む)はoが無い.
    let jMin = []; //jMin[3] = 2; は　3行目の(2-1)列目まではoが無い.
    let jMax = [];
    let temp;
    for (let i = 0; i < N; i++) {
        C.push(input[i + 1].split(""));
        iMin.push(N - 1);
        iMax.push(0);
        jMin.push(N - 1);
        jMax.push(0);
        // console.log("あ");
        // console.log(iMin[0]);
    }

    // 福(o)が居る最小行、最大行を求める.
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (C[i][j] == "o") {
                iMin[j] = Math.min(iMin[j], i);
                iMax[j] = Math.max(iMax[j], i);
            }
        }
    }

    // 上・下 移動.
    for (let n = 0; n < N; n++) {
        for (let t = 0; t < iMin[n]; t++) {
            console.log("U " + t);
        }
        for (let t = N - 1; t > iMax[n]; t--) {
            console.log("D " + t);
        }
    }


    // 福(o)が居る最小列、最大列を求める.
    for (let j = 0; j < N; j++) {
        for (let i = 0; i < N; i++) {
            if (C[i][j] == "o") {
                jMin[i] = Math.min(jMin[i], j);
                jMax[i] = Math.max(jMax[i], j);
            }
        }
    }

    // 左・右 移動.
    for (let n = 0; n < N; n++) {
        for (let t = 0; t < jMin[n]; t++) {
            console.log("L " + t);
        }
        for (let t = N - 1; t > jMax[n]; t--) {
            console.log("R " + t);
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));