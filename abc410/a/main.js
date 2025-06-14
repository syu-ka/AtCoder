function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    const k = Number(input[2]);
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (a[i] >= k) {
            count++;
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));