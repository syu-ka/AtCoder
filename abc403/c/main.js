function Main(input) {
    const [n, m, q] = input[0].split(" ").map(Number);
    // n: 人数. m:ページ数. q: クエリ数.
    let hasAllPage = Array(n).fill(false);
    // hasAllPage[i]: i番目の人が全てのページの閲覧権限を持っているかどうか.
    let hasEachPage = Array.from({ length: n }, () => new Set());
    // hasEachPage[i]: i番目の人が持っているページのセット.

    // console.log(hasAllPage);
    // console.log(hasEachPage);

    for (let i = 1; i <= q; i++) {
        const [a, b, c] = input[i].split(" ").map(Number);
        if (a === 1) {
            hasEachPage[b - 1].add(c - 1);
        } else if (a === 2) {
            hasAllPage[b - 1] = true;
        } else {
            if (hasAllPage[b - 1]) {
                console.log("Yes");
            } else {
                if (hasEachPage[b - 1].has(c - 1)) {
                    console.log("Yes");
                } else {
                    console.log("No");
                }
            }
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));