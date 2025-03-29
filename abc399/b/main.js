function Main(input) {
    const n = Number(input[0]);
    const p = input[1].split(" ").map(Number);

    // /* 要素番号を保持したまま、中身の値を基準としてソートする. */
    // const n = 4;
    // // n: 要素数.
    // const p = [3, 12, 9, 9];
    // // p: 要素の値.

    // 要素番号と値を保持する配列を作成
    const indexedValue = Array.from({ length: n }, (_, i) => ({
        value: p[i],
        index: i
    }));

    // 値を基準に降順ソート
    const indexedValue_sorted = [...indexedValue].sort((a, b) => b.value - a.value);

    // ランクを計算
    let rank = 0;
    for (let i = 0; i < n; i++) {
        if (i === 0 || indexedValue_sorted[i].value !== indexedValue_sorted[i - 1].value) {
            rank = i + 1;
        }
        indexedValue_sorted[i].rank = rank;
    }

    // 元の順序にランクをマッピング
    indexedValue_sorted.forEach(item => {
        indexedValue[item.index].rank = item.rank;
    });

    // 結果を出力
    for (let i = 0; i < n; i++) {
        console.log(indexedValue[i].rank);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));