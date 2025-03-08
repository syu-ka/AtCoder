function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const b = input[1].split(" ").map(Number);
    const w = input[2].split(" ").map(Number);

    let valueSum = 0;
    let ballCount = 0;
    b.sort((a, b) => b - a);
    w.sort((a, b) => b - a);
    for (let i = 0; i < n; i++) {
        if (b[i] + w[i] >= 0) {
            valueSum += b[i];
            ballCount++;
        } else if (b[i] >= 0) {
            valueSum += b[i];
            ballCount++;
        } else {
            break;
        }
    }

    for (let i = 0; i < ballCount; i++) {
        if (w[i] < 0) {
            break;
        }
        valueSum += w[i];
    }
    console.log(valueSum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));