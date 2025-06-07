function Main(input) {
    // 正三角形になり得る点の組み合わせを求める問題.
    // 条件：3点の距離が等しい。
    const [n, l] = input[0].split(" ").map(Number); // n は点の数、l は円の周の長さ。
    const d = input[1].split(" ").map(Number);  // d は一つ前の点からの距離。
    let ans = 0;
    const ET_d = l / 3; // 正三角形の辺の長さを求めるために、l を 3 で割る.

    let count = {};
    count[0] = 1; // 初期値として0を設定.
    for (let i = 0; i < l; i++) {
        if (count[i] === undefined) {
            count[i] = 0; // 存在しない場合は0を設定.
        }
    }
    let remainder = 0;
    for (let i = 0; i < n - 1; i++) {
        let elem = (remainder + d[i]) % l;
        count[elem] = (count[elem] || 0) + 1;
        remainder = elem;
    }

    for (let i = 0; i < l; i++) {
        let pos1 = count[i] || 0;
        let pos2 = count[i + ET_d] || 0;
        let pos3 = count[i + ET_d + ET_d] || 0;
        // console.log(`i: ${i}, pos1: ${pos1}, pos2: ${pos2}, pos3: ${pos3}`);
        if (pos1 > 0 && pos2 > 0 && pos3 > 0) {
            // pos1, pos2, pos3 はそれぞれの点の数を表す.
            ans += pos1 * pos2 * pos3; // 組み合わせの数を計算.
        }

        if (i + ET_d + ET_d >= l) {
            break; // これ以上計算する必要がないのでループを抜ける.
        }
    }

    // console.log(count);
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));