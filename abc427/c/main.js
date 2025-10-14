function Main(input) {
    /* N 頂点 M 辺の単純な無向グラフ.
     グラフを二部グラフにするために、最低でも何回辺を削除する必要があるか. */

    /* 回答方針
        適当に頂点を塗り分ける.
        同じ色の頂点を結ぶ辺を削除すると、二部グラフになる.
        そのため、「同じ色の頂点を結ぶ辺の数」が「削除する辺の数」になる.
        頂点の塗り分け方は 2^N 通りあるので、bit全探索してすべての塗り方での「削除する辺の数」を求め、その最小値が答えになる.
    */

    const [N, M] = input[0].split(" ").map(Number);
    let edges = []; // グラフの隣接リスト表現
    for (let i = 1; i <= M; i++) {
        const [u, v] = input[i].split(" ").map(Number);
        edges.push([u, v]);
    }

    let ans = M;
    /*  2^N 通りの塗り方を全部探索する */
    for (let bit = 0; bit < (1 << N); bit++) {
        // console.log(`bit=`, bit);
        console.log(`bit=`, bit.toString(2).padStart(N, '0'));
        let delete_count = 0
        for (const [u, v] of edges) {  // それぞれの辺を見て
            // console.log(`u=`, u, `v=`, v);
            // console.log(`(bit >> u)=`, (bit >> u), `(bit >> v)=`, (bit >> v));

            /* 結んでいる頂点が同じ色で塗られていたら */
            if ((1 & (bit >> u)) == (1 & (bit >> v))) {
                delete_count += 1; // カウントを増やす
            }
        }
        ans = Math.min(ans, delete_count)
    }
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));