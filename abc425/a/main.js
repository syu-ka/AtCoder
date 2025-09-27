function Main(input) {
    const n = Number(input[0]);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i ** 3;
        } else {
            sum += -1 * (i ** 3);
        }
    }
    console.log(sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));