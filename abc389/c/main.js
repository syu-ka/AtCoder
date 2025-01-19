function Main(input) {
    const Q = Number(input[0]);
    let kind = [];
    let detail = [];
    let kind1count = 0;
    let kind2count = 0;
    let kind3flag = false;
    let snakeQueue = [];
    let snakeHeadQueue = [0];
    let kind2sum = 0;
    for (let i = 0; i < Q; i++) {
        [kind[i], detail[i]] = input[i + 1].split(" ").map(Number);

        if (kind[i] == 1) { //最後尾に追加.
            kind1count++;
            snakeQueue.push(detail[i]); //最後尾に追加.

            snakeHeadQueue.push(snakeHeadQueue[kind1count - 1] + detail[i]);

        } else if (kind[i] == 2) { //先頭を削除して詰める.
            kind2count++;
            kind2sum += snakeQueue[kind2count - 1];
        } else if (kind[i] == 3) {
            kind3flag = true;

            console.log(snakeHeadQueue[kind2count + (detail[i] - 1)] - kind2sum);
        }
    }

    if (!kind3flag) {
        console.log();
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));