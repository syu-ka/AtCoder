function Main(input) {
    const [N, A, B] = input[0].split(" ").map(Number);
    const Ns = String(N).split("").map(Number);
    let answer = 0;
    for (let i = A; i <= N; i++) {
        const is = String(i).split("").map(Number);
        const total = is.reduce(function (sum, element) {
            return sum + element;
        }, 0)
        if (A <= total && total <= B) {
            answer += i;
        }
    }
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));