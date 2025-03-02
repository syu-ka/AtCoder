function Main(input) {
    // 入力処理.
    const [n, q] = input[0].split(" ").map(Number);
    // n:鳩の数 & 巣の数.
    // q:クエリの数.

    let pigeon = [""];
    // index=鳩の番号,pigeon[index]=巣の番号.
    // pigeon[1]=2のとき鳩1が巣2にいる.

    let nest = [""];
    //index=巣の番号,nest[index]=左から何番目.
    // nest[1]=3のとき巣1が左から3番目の巣(nestOrder[3]=1)にある.

    let nestOrder = [""];
    //index=左からindex番目の巣,nestOrder[index]=巣の番号.
    // nestOrder[1]=3のとき左から1番目の巣は巣3.

    //初期状態.
    for (let i = 1; i <= n; i++) {
        pigeon.push(i);
        nest.push(i);
        nestOrder.push(i);
    }

    let op = [""];
    for (let i = 1; i <= q; i++) {
        // 今は配列で入れているが連想配列に後で書き直す.
        op.push(input[i].split(" ").map(Number));

        switch (op[i][0]) {
            case 1:
                pigeon[op[i][1]] = nestOrder[op[i][2]];
                console.log(`pigeon[${op[i][1]}]=${pigeon[op[i][1]]}`);
                break;

            case 2:
                let copy = nestOrder.slice(op[i][1], op[i][1] + 1);
                nestOrder[op[i][1]] = nestOrder[op[i][2]];
                nestOrder[op[i][2]] = copy;
                console.log(`nestOrder[${op[i][1]}]=${nestOrder[op[i][1]]}`);
                console.log(`nestOrder[${op[i][2]}]=${nestOrder[op[i][2]]}`);
                break;

            case 3:
                let temp = pigeon[op[i][1]];
                let last = pigeon[op[i][1]];
                let test = 0;
                while (test < 5) {
                    temp = nestOrder[temp];
                    console.log(`temp=${temp}`);

                    if (temp == op[i][1]) {
                        break;
                    }
                    last = temp;

                    test++;
                }
                console.log(last);

                // console.log(`pigeon[${op[i][1]}]=${pigeon[op[i][1]]}`);
                // console.log(`nestOrder[${pigeon[op[i][1]]}]=${nestOrder[pigeon[op[i][1]]]}`);
                // console.log(`nestOrder[${nestOrder[pigeon[op[i][1]]]}]=${nestOrder[nestOrder[pigeon[op[i][1]]]]}`);
                // console.log(nestOrder[pigeon[op[i][1]]]);
                break;

            default:
                break;
        }
        // console.log(`nestOrder=${nestOrder}`);
    }
    // console.log(op);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));