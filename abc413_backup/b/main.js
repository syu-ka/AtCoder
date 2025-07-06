function Main(input) {
    const n = Number(input[0]);
    const set = new Set(); // 重複を排除したいためsetを使用.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == j) continue; // 同じ行はスキップ
            let concatenated_elements = [];
            concatenated_elements.push(input[i]);
            concatenated_elements.push(input[j]);
            set.add(concatenated_elements.join("")); // 連結した文字列をセットに追加
        }
    }
    console.log(set.size); // セットのサイズを出力
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));