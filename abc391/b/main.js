function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let S = [];
    let T = [];
    let isTrue = false;
    let trueCount = 0;

    for (let i = 0; i < N; i++) {
        S.push(input[i + 1].split(""));
    }
    for (let i = 0; i < M; i++) {
        T.push(input[i + N + 1].split(""));
    }

    for (let a = 0; a < N; a++) {
        for (let b = 0; b < N; b++) {
            if (S[a][b] == T[0][0]) {
                for (let i = 0; i < M; i++) {
                    for (let j = 0; j < M; j++) {
                        if (S[a + i][b + j] == T[i][j]) {
                            trueCount++;
                            if (trueCount == M ** 2) {
                                isTrue = true;
                                console.log(`${a + 1} ${b + 1}`);
                            }
                        } else {
                            trueCount = 0;
                            break;
                        }
                    }
                    if (trueCount == 0 || isTrue) break;
                }
            }
        }
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));