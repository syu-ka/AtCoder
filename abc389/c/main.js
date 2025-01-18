function Main(input) {
    const Q = Number(input[0]);
    // const query = [];
    let kind = [];
    let detail = [];
    let kind1count = 0;
    let kind2count = 0;
    let kind3flag = false;
    let snakeQueue = [];
    let snakeHeadQueue = [0];
    let kind1sum = 0;
    let kind2sum = 0;
    for (let i = 0; i < Q; i++) {
        // query.push(input[i + 1]);
        // [kind[i], detail[i]] = query[i].split(" ").map(Number);
        [kind[i], detail[i]] = input[i + 1].split(" ").map(Number);
        // console.log(kind[i], detail[i]);
        // console.log(kind, detail);

        if (kind[i] == 1) { //最後尾に追加.
            kind1count++;
            // kind1sum += detail[i];
            // snakeQueue.push(detail[i]); //最後尾に追加.

            snakeHeadQueue.push(snakeHeadQueue[kind1count - 1] + detail[i]);
            // console.log(`snakeHeadQueue[${snakeHeadQueue.length - 1}] = ${snakeHeadQueue[snakeHeadQueue.length - 1]}`);

        } else if (kind[i] == 2) { //先頭を削除して詰める.
            kind2count++;
            kind2sum += detail[kind2count - 1];
            // console.log(`kind2sum = ${kind2sum}`);
        } else if (kind[i] == 3) {
            kind3flag = true;

            console.log(snakeHeadQueue[kind2count + (detail[i] - 1)] - kind2sum);
            // console.log(shiftSnekeQueue);

            // const upToDetail = snakeQueue.slice(kind2count, kind2count + (detail[i] - 1));
            // const upToDetail = copySnakeQueue.slice(kind2count, kind2count + (detail[i] - 1));
            // console.log(upToDetail);


            // let sum = kind1sum - kind2sum;
            // if (upToDetail.length >= 1) {
            //     sum = upToDetail.reduce((a, b) => a - b, sum);
            // }

            // let sum;
            // if (upToDetail.length >= 2) {
            //     sum = upToDetail.reduce((a, b) => a + b,);
            // } else if (upToDetail.length == 1) {
            //     sum = upToDetail[0];
            // } else {
            //     sum = 0;
            // }

            // console.log(sum);
        }
        // console.log(`i=${i}の時snakeQueue=${snakeQueue}`);
    }

    if (!kind3flag) {
        console.log();
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));