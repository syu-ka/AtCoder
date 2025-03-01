function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    let pigeon = []; // 鳩.pigeon[1]=2のとき鳩1が巣2にいる.
    let countInNest = []; //巣にいる鳩の数.countInNest[1]=3のとき巣1にいる鳩の数は3羽.
    for (let i = 1; i <= n; i++) {
        let nest = i;
        pigeon.push(nest);
        countInNest.push(1);
    }

    let op = [""];
    for (let i = 1; i <= q; i++) {
        // 今は配列で入れているが連想配列に後で書き直す.
        op.push(input[i].split(" ").map(Number));

        switch (op[i][0]) {
            case 1:
                pigeon[op[i][1]] = op[i][2];
                countInNest[op[i][2]] -= 1;
                break;

            case 2:
                let temp = countInNest[op[i][1]];
                countInNest[op[i][1]] = countInNest[op[i][2]];
                countInNest[op[i][2]] = countInNest[op[i][temp]];
                break;

            case 3:
                console.log(pigeon[op[i][1]]);
                break;

            default:
                break;
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));