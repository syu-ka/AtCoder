function Main(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    let count = [];
    for (let i = 0; i < N; i++) {
        count.push(0);
        while (A[i] % 2 == 0) {
            A[i] /= 2;
            count[i]++;
        }
    }

    console.log(Math.min(...count));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));