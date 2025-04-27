function Main(input) {
    let sum = 0;
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            sum += a[i - 1];
        }
    }
    console.log(sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));