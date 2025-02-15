function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    // N:頂点, M:辺.

    let side = [];
    let set = new Set();
    for (let i = 0; i < M; i++) {
        side.push(input[i + 1].split(" ").map(Number));

        if (side[i][0] != side[i][1]) { ////自己ループではないとき.

            // uとvが入れ替わっても同じとするため.例えば(u1, v1) = (2,3) と (u2, v2) = (3,2)が同じとするため.
            if (side[i][0] < side[i][1]) {
                set.add(`${side[i][0]} ${side[i][1]}`);
            } else {
                set.add(`${side[i][1]} ${side[i][0]}`);
            }
        }

    }

    // 元の辺の数-正常な辺(自己ループではない&&重複した辺ではない).
    console.log(M - set.size);

}
function compareFn(a, b) {
    return a - b;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));