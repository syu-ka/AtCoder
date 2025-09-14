function Main(input) {
    const t = Number(input[0]);
    for (let i = 1; i <= t; i++) {
        let [a, b, c] = input[i].split(" ").map(Number);
        let max_contestCount = 0;

        // コンテストABCの最大回数.
        let min_ABC = Math.min(a, b, c);
        max_contestCount += min_ABC;
        a -= min_ABC;
        b -= min_ABC;
        c -= min_ABC;

        // コンテスト開催を行うためには A と C は必ず必要なため.0になったら終了.
        if (a == 0 || c == 0) {
            console.log(max_contestCount);
            continue;
        }

        // コンテストAACの最大回数.
        if (a >= c && c != 0) {
            let min_AAC = Math.min(Math.floor(a / 2), c);
            max_contestCount += min_AAC;
            a -= min_AAC * 2;
            c -= min_AAC;
        }

        // コンテストACCの最大回数.
        if (c >= a && a != 0) {
            let min_ACC = Math.min(a, Math.floor(c / 2));
            max_contestCount += min_ACC;
            a -= min_ACC;
            c -= min_ACC * 2;
        }

        // 全コンテストの合計回数の最大.
        console.log(max_contestCount);

    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));