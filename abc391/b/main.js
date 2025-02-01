function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let S = [""];
    let T = [""];
    let index1 = 1;
    let index2 = 1;
    let isTrue = false;
    let isPrevTrue = false;
    let trueCount = 0;
    let a, b;

    for (let i = 0; i < N; i++) {
        S.push(input[i + 1].split(""));
    }
    for (let i = 0; i < M; i++) {
        T.push(input[i + N + 1].split(""));
    }
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (j == 1 && trueCount != 0) {
                index1++;
                // console.log(`b = ${b}`);
                index2 = 1;
                j = b;
            }
            if (T[index1][index2] == S[i][j]) {
                // console.log(i, j);
                if (index1 == 1 && index2 == 1) {
                    a = i;
                    b = j;
                }
                index2++;
                trueCount++;
                if (trueCount == M ** 2) {
                    isTrue = true;
                    console.log(a + " " + b);
                    break;
                }
                // console.log(trueCount);
            } else {
                if (trueCount != 0) {
                    i = a;
                    j = b;
                }
                trueCount = 0;
                index1 = 1;
                index2 = 1;
            }
        }
        if (trueCount == M ** 2) break;
        // if (trueCount != 0) {
        //     index1++;
        //     console.log(`b = ${b}`);
        //     index2 = b;
        //     j = b;
        // }
    }

    // console.log(S);
    // console.log(T);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));