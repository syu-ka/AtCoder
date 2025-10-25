function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);

    for (let i = 1; i <= n; i++) {
        if (i <= m) {
            console.log("OK");
        } else {
            console.log("Too Many Requests");
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));