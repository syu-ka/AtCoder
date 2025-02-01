function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let S = [];
    let T = [];

    for (let i = 0; i < N; i++) {
        S.push(input[i + 1].split(""));
    }
    for (let i = 0; i < M; i++) {
        T.push(input[i + N + 1].split(""));
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; i++) {
            if (T[0][0] == S[0][i])
        }
    }
    console.log(N, M);
    console.log(S);
    console.log(T);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));