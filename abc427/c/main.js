function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    let u_v_graphArray = Array.from({ length: n }, (v, i) => []); // グラフの隣接リスト表現
    for (let i = 1; i <= m; i++) {
        u_v_graphArray[i - 1] = input[i].split(" ").map(Number);
    }
    // console.log(u_v_graphArray);


    const checkBipartite = (number, graphArray) => {
        let i = 0;
        const colors = new Array(number).fill(0);

        // 深さ優先探索 他の頂点とを網羅するために使用する。

        const dfs = (v, c) => {
            // console.log(`${v}の色を${c}色に塗る`);
            colors[v] = c;
            // console.log(`${i}|なし|def(${i},${c}) | |${v}を${c}色に塗る|${colors}`);
            for (let j = 0; j < graphArray[v].length; j++) {
                // 頂点vに対して、隣接する頂点毎にループする。
                // 隣接している頂点が同じ色の場合
                if (colors[graphArray[v][j]] == c) {
                    // console.log(`${i}|${j}|def(${i},${c}) | colors[graphArray[v][j]] == c  </br> colors[graphArray[${v}][${j}]]（ ＝${colors[graphArray[v][j]]}） == ${c}|${v}と${graphArray[v][j]}は同じ${c}色${colors}`);
                    return false;
                }
                // 隣接している頂点が塗られていない場合異なる色で塗る。
                if (colors[graphArray[v][j]] == 0 && !dfs(graphArray[v][j], -c)) {
                    // console.log(`${i}|${j}| def(${graphArray[v][j]},${-c} | colors[graphArray[v][j]] == 0  </br> colors[graphArray[${v}][${j}]]（ ＝${colors[graphArray[v][j]]}） == 0 |${v}は塗り替えられていないので${-c}色に塗る|${colors}`);
                    return false;
                }
                // console.log(`${i}|${j}|def(${i},${c})| colors[graphArray[v][j]] !== 0 and c  </br> colors[graphArray[${v}][${j}]]（ ＝${colors[graphArray[v][j]]}） !== 0  and ${c}|${v}と${graphArray[v][j]}は既に異なる色に塗られている|${colors}`);
            }
            // 全ての色が塗れた場合。
            // console.log("色が塗れた場合");
            // console.log(`${i}|なし|def(${i},${c}) | |すべての頂点が塗れた|${colors}`);
            return true;
        }
        // 全ての頂点に対してループする。
        // console.log(`i|j|!dfs(i,1)|条件|行動|graphの色`)
        for (i = 0; i < number; i++) {
            if (colors[i] == 0) {
                if (!dfs(i, 1)) {
                    console.log("false");
                    return "false";
                }
            }
        }
        console.log("true");
        return "true";
    }

    let is2colorable = false;
    let i = 0;
    while (is2colorable === false) {
        u_v_graphArray.splice()
        is2colorable = checkBipartite(n, u_v_graphArray);
    }


}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));