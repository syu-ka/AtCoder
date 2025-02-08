function Main(input) {
    const N = Number(input[0]);
    const P = input[1].split(" ").map(Number); //人iが人Piを見つめている.
    const Q = input[2].split(" ").map(Number); //人iが数Qiのゼッケンを付けている.
    let S = []; //iが書かれたゼッケンを付けている人が見つめている人のゼッケンの数.
    for (let i = 0; i < N; i++) {
        S.push(-1);
    }

    for (let i = 0; i < N; i++) {
        S[Q[i] - 1] = Q[P[i] - 1];
    }
    console.log(...S);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));