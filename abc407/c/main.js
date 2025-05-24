function Main(input) {
    const s = input[0].split("").map(Number);
    const n = s.length;
    let difference_sum = 0;
    for (let i = 0; i < n - 1; i++) {
        difference_sum += s[i] - s[i + 1] >= 0 ? s[i] - s[i + 1] : 10 + s[i] - s[i + 1];
    }
    console.log(difference_sum + n + s[n - 1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));