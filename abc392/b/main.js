function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const A = input[1].split(" ").map(Number);
    console.log(N - M);

    let X = [];

    for (let i = 1; i <= N; i++) {
        let isExist = false;
        for (let j = 0; j < M; j++) {
            if (A[j] == i) isExist = true;
        }
        if (!isExist) X.push(i);
    }

    console.log(...X);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));