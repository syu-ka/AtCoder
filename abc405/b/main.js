function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);
    let set = new Set();
    for (let i = 0; i < n; i++) {
        if (a[i] <= m) {
            set.add(a[i]);
        }
        if (set.size == m) {
            console.log(n - i);
            return;
        }

    }
    console.log(0);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));