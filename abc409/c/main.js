function Main(input) {
    // 正三角形になり得る点の組み合わせを求める問題.
    // 条件：3点の距離が等しい。
    const [n, l] = input[0].split(" ").map(Number); // n は点の数、l は円の周の長さ。
    const d = input[1].split(" ").map(Number);  // d は一つ前の点からの距離。
    let ans = 0;    // 組み合わせの数を格納する変数。
    const ET_d = l / 3; // 正三角形の弧の長さを求めるために、l を 3 で割る.

    let count = {};
    count[0] = 1; // 初期値として0を設定.
    let remainder = 0;
    for (let i = 0; i < n - 1; i++) {
        let pos = (remainder + d[i]) % l;
        count[pos] = (count[pos] || 0) + 1;
        remainder = pos;
    }

    for (let i = 0; i < l; i++) {
        let pos1 = count[i] || 0;
        let pos2 = count[i + ET_d] || 0;
        let pos3 = count[i + ET_d + ET_d] || 0;

        if (pos1 > 0 && pos2 > 0 && pos3 > 0) {
            // pos1, pos2, pos3 はそれぞれの点の数を表す.
            ans += pos1 * pos2 * pos3; // 組み合わせの数を計算.
        }

        if (i + ET_d + ET_d >= l) {
            break; // これ以上計算する必要がないのでループを抜ける.
        }
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));