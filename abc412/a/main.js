function Main(input) {
    let count = 0;
    const n = Number(input[0]);
    for (let i = 1; i <= n; i++) {
        const line = input[i].split(" ").map(Number);
        const a = line[0];
        const b = line[1];

        if (a < b) {
            count++;
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));