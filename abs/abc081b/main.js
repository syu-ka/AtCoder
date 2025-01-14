function Main(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    let count = 0;
    let isTrue = true;
    while (isTrue) {
        for (let i = 0; i < N; i++) {
            if (A[i] % 2 !== 0) {
                isTrue = false;
                break;
            }
            A[i] /= 2;
        }
        if (isTrue) count++;

    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));