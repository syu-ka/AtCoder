function Main(input) {
    const t = Number(input[0]);
    let n = []; // n: 各テストケースのnの値(ドミノの数)を格納する配列
    let s = []; // s: 各テストケースのsの値を格納する配列
    let s_first = []; // s_first: 各テストケースのs_1を格納する配列
    let s_last = []; // s_last: 各テストケースのs_nを格納する配列
    let s_sorted = []; // s_sorted: 各テストケースのsをソートしたものを格納する配列

    let testCase = 0; // 現在のテストケース番号.
    for (let i = 1; i <= 2 * t; i = i + 2) {
        n.push(Number(input[i]));
        s.push(input[i + 1].split(" ").map(Number));
        s_first.push(s[testCase][0]);
        // s_first: 各テストケースのs_1を格納する配列
        s_last.push(s[testCase][n[testCase] - 1]);
        // s_last: 各テストケースのs_nを格納する配列

        s_sorted.push(s[testCase].sort((a, b) => a - b));

        if (s_first[testCase] >= s_last[testCase]) {
            console.log(2);
            testCase++;
            continue;
        }

        // console.log("testCase:", testCase, ",n:", n[testCase], "s:", s[testCase], ",s_first:", s_first[testCase], ",s_last:", s_last[testCase],
        //     ",s_sorted:", s_sorted[testCase]);

        s_first_index = s_sorted[testCase].indexOf(s_first[testCase]);
        // s_first_index: 現在のテストケースのs_1のs_sortedのインデックス
        s_last_index = s_sorted[testCase].lastIndexOf(s_last[testCase]);
        // s_last_index: 現在のテストケースのs_nのs_sortedのインデックス

        // console.log(s_first_index, s_last_index);

        let required_domino_count = 1;
        let is_domino_failed = false;
        // is_domino_failed: ドミノが倒れない場合にtrueになるフラグ
        let prev_index = s_first_index;
        // prev_index: 前のドミノのインデックス

        while (prev_index < s_last_index) {
            let double_value_index = (element) => element <= s_sorted[testCase][prev_index] * 2;
            // double_value_index: 前のドミノの2倍以下の値を持つドミノのインデックスを取得する関数

            let next_index = s_sorted[testCase].findLastIndex(double_value_index);
            if (next_index === -1 || next_index <= prev_index) {
                is_domino_failed = true;
                break;
            }
            // console.log("prev_index:", prev_index, "next_index:", next_index);

            required_domino_count++;
            // 必要なドミノの数をカウント

            prev_index = next_index;
            // prev_indexを更新

        }
        if (required_domino_count > 1 && !is_domino_failed) {
            console.log(required_domino_count);
        }
        else {
            console.log(-1);
        }
        testCase++;
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));