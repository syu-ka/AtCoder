function Main(input) {
    const n = Number(input[0]);
    const h = input[1].split(" ").map(Number);

    let answer = 1; // n=1の場合ループが実行されないため、初期値を1に設定.
    for (let i = 1; i < n; i++) { // 公差i.
        for (let j = 0; j < i; j++) { //初項j.
            let height = 0;
            let countCurrent = 0;
            for (let k = j; k < n; k += i) { //初項j, 公差iの等差数列を作成.
                /* 等差数列内の隣接する項で「ビルの高さ」が同じ場合、その隣接するビルは等間隔で並んでいると言える */
                if (h[k] !== height) { // 高さが変わったら、初期化.
                    countCurrent = 0;
                    height = h[k];
                }
                countCurrent++;
                answer = Math.max(answer, countCurrent);
            }
        }

    }

    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));