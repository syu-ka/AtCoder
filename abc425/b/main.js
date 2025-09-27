function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    let p = new Array(n).fill(-1);
    let used = new Set();
    for (let i = 0; i < n; i++) {
        if (a[i] !== -1) {
            if (used.has(a[i])) {
                console.log("No");
                return;
            }
            p[i] = a[i];
            used.add(a[i]);
        }
    }
    for (let i = 0, j = 1; i < n; i++) {
        if (p[i] === -1) {
            while (used.has(j)) {
                j++;
                if (j > n) {
                    console.log("No");
                    return;
                }
            }
            p[i] = j;
            used.add(j);
        }
    }
    console.log("Yes");
    console.log(p.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));