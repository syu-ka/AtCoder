function Main(input) {
    const Q = Number(input[0]);
    const query = [];
    let kind = [];
    let detail = [];
    let kind3count = 0;
    let snakeQueue = [];
    for (let i = 0; i < Q; i++) {
        query.push(input[i + 1]);
        [kind[i], detail[i]] = query[i].split(" ").map(Number);
        // console.log(kind[i], detail[i]);
        // console.log(kind, detail);

        if (kind[i] === 1) {
            snakeQueue.push(detail[i]); //最後尾に追加.
        } else if (kind[i] === 2) {
            snakeQueue.shift(); //先頭を削除して詰める.
        } else if (kind[i] === 3) {
            kind3count++;
            let upToDetail = [...snakeQueue];
            // console.log("あ" + upToDetail);
            upToDetail.splice(detail[i] - 1, upToDetail.length - 1);
            const sum = upToDetail.reduce((a, b) => a + b,);
            // console.log("あ" + upToDetail);
            // console.log(snakeQueue);
            console.log(sum);
        } else {
            console.log("エラー");
        }
        // console.log(`i=${i}の時snakeQueue=${snakeQueue}`);
    }


    if (kind3count === 0) {
        console.log();
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));