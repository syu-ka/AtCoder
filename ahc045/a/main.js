function Main(input) {
    const [n, m, q, l, w] = input[0].split(" ").map(Number);
    // n: 都市の個数.
    // m: 回答における都市のグループの個数.
    // q: 最大クエリ回数.
    // l: クエリを行う都市の集合のサイズの上限.
    // w: 都市の座業が含まれる長方形の幅や高さとしてあり得る最大値.

    const g = input[1].split(" ").map(Number);
    // g[i]: i番目のグループに割り当てる都市の個数.

    /* 各都市が存在する可能性のある座業の長方形範囲 */
    let lx = [];
    let rx = [];
    let ly = [];
    let ry = [];
    for (let i = 0; i < n; i++) {
        let tempXY = input[i + 2].split(" ").map(Number);
        lx.push(tempXY[0]);
        rx.push(tempXY[1]);
        ly.push(tempXY[2]);
        ry.push(tempXY[3]);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));