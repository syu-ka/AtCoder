function Main(input) {
    const Q = Number(input[0]);
    let type = []; //クエリのタイプ. 1<=type<=3.
    let detail = []; //クエリの詳細.type==1なら長さl,type==3ならk番目.
    let type1count = 0, type2count = 0; //それぞれtype1,2のクエリが実行された回数.
    let type3flag = false; //1回でもtype3のクエリがあればtrue.
    let snakeQueue = []; //最後尾にl(ヘビの長さ)を追加する用の配列.
    let snakeHeadQueue = [0]; //最後尾にk番目のヘビの頭の座標を追加する用の配列.
    let type2sum = 0; //type2で列から抜けたヘビの長さの合計.
    for (let i = 0; i < Q; i++) {
        [type[i], detail[i]] = input[i + 1].split(" ").map(Number);

        if (type[i] == 1) { //最後尾に追加.
            type1count++;
            snakeQueue.push(detail[i]);
            snakeHeadQueue.push(snakeHeadQueue[type1count - 1] + detail[i]);

        } else if (type[i] == 2) { //先頭が列から抜ける.
            type2count++;
            type2sum += snakeQueue[type2count - 1];
        } else if (type[i] == 3) {
            type3flag = true;
            const k = type2count + detail[i]; //k番目にいるヘビのindex.
            console.log(snakeHeadQueue[k - 1] - type2sum);
        }
    }

    if (!type3flag) {
        console.log();
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));