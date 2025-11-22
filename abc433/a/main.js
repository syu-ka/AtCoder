function Main(input) {
    const [x, y, z] = input[0].split(" ").map(Number);
    let max = Math.max(100 - x, 100 - y);
    for (let i = 0; i <= max; i++) {
        if (x + i == (y + i) * z) {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));