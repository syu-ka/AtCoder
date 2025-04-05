function Main(input) {
    let sum = 1;
    let isINF = false;

    const [n, m] = input[0].split(" ").map(Number);

    for (let i = 1; i <= m; i++) {
        sum += Math.pow(n, i);

        if (sum > 1e9) {
            isINF = true;
            break;
        }
    }

    if (isINF) {
        console.log("inf");
        return;
    } else {
        console.log(sum);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));