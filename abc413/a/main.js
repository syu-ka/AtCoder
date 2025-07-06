function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += a[i];
    }
    if (count <= m) {
        console.log("Yes");
        return;
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));