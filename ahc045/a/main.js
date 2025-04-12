function query(c) {
    console.log("?", c.length, ...c);
    console.log(""); // 改行
    process.stdout.write(""); // flush
    const result = [];
    for (let i = 0; i < c.length - 1; i++) {
        const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0];
        result.push(input.split(" ").map(Number));
    }
    return result;
}

function answer(groups, edges) {
    console.log("!");
    // console.log(""); // 改行
    // process.stdout.write(""); // flush
    for (let i = 0; i < groups.length; i++) {
        console.log(...groups[i]);
        // console.log(""); // 改行
        // process.stdout.write(""); // flush
        for (const e of edges[i]) {
            console.log(...e);
            // console.log(""); // 改行
            // process.stdout.write(""); // flush
        }
    }
}

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
        const [a, b, c, d] = input[i + 2].split(" ").map(Number);
        lx.push(a);
        rx.push(b);
        ly.push(c);
        ry.push(d);
    }

    const x = lx.map((l, i) => Math.floor((l + rx[i]) / 2));
    const y = ly.map((l, i) => Math.floor((l + ry[i]) / 2));

    const cities = Array.from({ length: n }, (_, i) => i);
    cities.sort((i, j) => x[i] === x[j] ? y[i] - y[j] : x[i] - x[j]);

    const groups = [];
    let startIdx = 0;
    for (const groupSize of g) {
        groups.push(cities.slice(startIdx, startIdx + groupSize));
        startIdx += groupSize;
    }

    const edges = [];
    for (let k = 0; k < m; k++) {
        edges.push([]);
        for (let i = 0; i < g[k] - 1; i += 2) {
            if (i < g[k] - 2) {
                const ret = query(groups[k].slice(i, i + 3));
                edges[k].push(...ret);
            } else {
                edges[k].push(groups[k].slice(i, i + 2));
            }
        }
    }

    answer(groups, edges);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));