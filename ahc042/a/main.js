function Main(input) {
    const N = Number(input[0]);
    let C = [];
    let isAboveFuku = false; //福が上に居るか.
    let isUnderFuku = false; //福が下に居るか.
    let isLeftFuku = false; //福が左に居るか.
    let isRightFuku = false; //福が右に居るか.

    for (let i = 0; i < N; i++) {
        C.push(input[i + 1].split(""));
    }

    // 鬼(x)か求める.
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (C[i][j] == "x") {
                isAboveFuku = false;
                isUnderFuku = false;
                isLeftFuku = false;
                isRightFuku = false;
                for (let n = 0; n < j; n++) {
                    if (C[i][n] == "o") isLeftFuku = true;
                }
                for (let n = 0; n < i; n++) {
                    if (C[n][j] == "o") isAboveFuku = true;
                }
                for (let n = j; n < N; n++) {
                    if (C[i][n] == "o") isRightFuku = true;
                }
                for (let n = i; n < N; n++) {
                    if (C[n][j] == "o") isUnderFuku = true;
                }

                if (!isLeftFuku) {
                    for (let n = 0; n <= j; n++) {
                        console.log("L " + i);
                    }
                    for (let n = 0; n <= j; n++) {
                        console.log("R " + i);
                    }
                } else if (!isRightFuku) {
                    for (let n = j; n < N; n++) {
                        console.log("R " + i);
                    }
                    for (let n = j; n < N; n++) {
                        console.log("L " + i);
                    }

                } else if (!isAboveFuku) {
                    for (let n = 0; n <= i; n++) {
                        console.log("U " + j);
                    }
                    for (let n = 0; n <= i; n++) {
                        console.log("D " + j);
                    }
                } else if (!isUnderFuku) {
                    for (let n = i; n < N; n++) {
                        console.log("D " + j);
                    }
                    for (let n = i; n < N; n++) {
                        console.log("U " + j);
                    }
                } else {
                    // console.log("すべてに当てはまらない");
                }
            }
        }
    }


}





Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));