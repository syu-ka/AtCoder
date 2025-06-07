function Main(input) {
    // 条件を満たす最大の非負整数を求める問題.
    // 条件：A に、x 以上の要素が重複を含めて x 回以上現れる。
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    let ans = 0;

    for (let i = 0; i <= n; i++) {  // i <= n の理由は、n 個の要素があるので、i は 0 から n までの範囲で考える必要があるため。
        let count = 0;
        // i 以上の要素が何回あるかを数える.
        for (let j = 0; j < n; j++) {
            if (a[j] >= i) {
                count++;
            }
        }
        if (count >= i) {
            ans = i;
        } //else break;
    }
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));