function Main(input) {
    const [n, k] = input[0].split(" ").map(Number);
    let a = [...Array(n + 1).fill(1)];
    const divisor = 1_000_000_000; // 割る数.

    let s = k;
    for (let i = k; i <= n; i++) {
        a[i] = s;
        s -= a[i - k];
        s += a[i];
        s = (s + divisor) % divisor;
        // s = s % divisorではダメな理由：割られる数が負になるのを防ぐため.負になると割り算の結果が変わり、結果が正しく無くなる可能性がある.
    }
    console.log(a[n]);
    // console.log(a);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));