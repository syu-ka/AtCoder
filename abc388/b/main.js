function Main(input) {
    const [N, D] = input[0].split(" ").map(Number);
    let T = []; //太さ.
    let L = []; //長さ.
    let W; //重さ.
    let Wmax = []; //重さ.
    for (let i = 0; i < N; i++) {
        T.push(input[i + 1].split(" ").splice(0, 1).map(Number));
        L.push(input[i + 1].split(" ").splice(1, 1).map(Number));
    }

    for (let k = 1; k <= D; k++) {
        Wmax.push(0);
        for (let i = 0; i < N; i++) {
            W = T[i] * (Number(L[i]) + Number(k));
            if (Wmax[Wmax.length - 1] < W) {
                Wmax[Wmax.length - 1] = W;
            }
        }
        console.log(Wmax[k - 1]);
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));