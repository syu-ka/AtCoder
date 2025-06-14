function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    // n: 箱の数, q:ボールの数
    const x = input[1].split(" ").map(Number);
    // x[i]: i番目のボールへの指示.

    let boxes = Array(n).fill(0); // 各箱に入るボールの数を初期化
    let output = []; // 出力用の配列

    for (let i = 0; i < q; i++) {
        if (x[i] >= 1) {
            boxes[x[i] - 1] += 1; // x[i]番目の箱にボールを1つ入れる
            output.push(x[i]); // 入れた箱の番号を出力
        } else {
            for (let j = 0; j < n; j++) {
                let min_box = Math.min(...boxes); // 最小のボール数を持つ箱を探す
                if (boxes[j] === min_box) {
                    boxes[j] += 1; // 最小の箱にボールを1つ入れる
                    output.push(j + 1); // 入れた箱の番号を出力（1-indexed）
                    break; // 一つ入れたらループを抜ける
                }
            }
        }
    }
    console.log(output.join(" ")); // 出力をスペース区切りで表示
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));