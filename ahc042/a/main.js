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
        iMin.push(N);
        iMax.push(-1);
        jMin.push(N);
        jMax.push(-1);
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
        // console.log(`iMin[n] = ${iMin[n]}`);
        // console.log(`iMax[n] = ${iMax[n]}`);

        if (iMax[n] == -1) {
            for (let t = 0; t < N; t++) {
                console.log("U " + n);
            }
        } else {

            // 上移動して鬼を取り除く.
            for (let t = 0; t < iMin[n]; t++) {
                // console.log(t);
                console.log("U " + n);
            }
            // 上移動した分を下移動して元に戻す.
            for (let t = 0; t < iMin[n]; t++) {
                // console.log(t);
                console.log("D " + n);
            }

            // 下移動して鬼を取り除く.
            for (let t = N - 1; t > iMax[n]; t--) {
                // console.log(t);
                console.log("D " + n);
            }
            if (iMin[n] != iMax[n]) {
                // 下移動した分を上移動して元に戻す.
                for (let t = N - 1; t > iMax[n]; t--) {
                    console.log("U " + n);
                }
            }
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
        // 左移動して鬼を取り除く.
        for (let t = 0; t < jMin[n]; t++) {
            console.log("L " + n);
        }
        // 左移動した分を右移動して元に戻す.
        for (let t = 0; t < jMin[n]; t++) {
            console.log("R " + n);
        }
        // 右移動して鬼を取り除く.
        for (let t = N - 1; t > jMax[n]; t--) {
            console.log("R " + n);
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));