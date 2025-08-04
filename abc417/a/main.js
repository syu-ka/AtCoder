function Main(input) {
    const [n, a, b] = input[0].split(" ").map(Number);
    const s = input[1].split("");
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (a <= i && n - b > i) {
            ans.push(s[i]);
        }
    }
    console.log(ans.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));