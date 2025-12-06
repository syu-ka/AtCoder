function Main(input) {
    let sum_answer = 0;
    const N = Number(input[0]);
    for (let i = 1; i <= N; i++) {
        sum_answer += i;
    }
    console.log(sum_answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));