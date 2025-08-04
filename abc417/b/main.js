function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);
    const b = input[2].split(" ").map(Number);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (a[j] === b[i]) {
                a.splice(j, 1); // aからb[i]を削除
                break; // 一度見つけたら次のbに移る
            }
        }
    }
    if (a.length > 0) {
        console.log(a.join(" ")); // 残ったaの要素をスペース区切りで出力
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));