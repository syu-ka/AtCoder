function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    // n: 長さnの整数列, q: クエリの数
    const a = Array.from({ length: n }, (_, i) => i + 1); // 1からnまでの整数列
    let shiftCount = 0; // aの先頭要素を末尾に移動した回数
    let is_output = false; // 出力フラグ.出力が有ったか.
    for (let i = 1; i <= q; i++) {
        input[i] = input[i].split(" ").map(Number);
        if (input[i][0] === 1) {
            // クエリが1の場合、aのp番目の要素をxに変更
            const [_, p, x] = input[i];
            a[(p - 1 + shiftCount) % n] = x; // xは1-indexedなので、-1して0-indexedに変換
        }
        else if (input[i][0] === 2) {
            // クエリが2の場合、aのp番目の要素を出力
            const [_, p] = input[i];
            console.log(a[(p - 1 + shiftCount) % n]); // pは1-indexedなので、-1して0-indexedに変換
            is_output = true; // 出力があったのでフラグを立てる
        }
        else if (input[i][0] === 3) {
            // クエリが3の場合、aの先頭要素を末尾に移動をp回行う
            const [_, p] = input[i];
            shiftCount += p; // 移動回数を加算
            shiftCount %= n; // 長さnの整数列なので、nで割った余りを取る
        }
    }
    if (!is_output) {
        // 出力がなかった場合は、空行を出力
        console.log("");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));