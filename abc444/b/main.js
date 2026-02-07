"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const [N, K] = input[line++].split(" ").map(Number);

    // 各桁を格納したリスト.
    const digit = String(N).split("").map(Number);

    let digit_sum = 0 // 各桁の合計.
    for (let i = 0; i < digit.length; i++) {
        digit_sum += digit[i];
    }

    let result = 0;
    for (let i = 1; i <= N; i++) {
        let i_digit = String(i).split("").map(Number);
        let i_digit_sum = i_digit.reduce(function (sum, element) {
            return sum + element;
        }, 0);
        // console.log(i_digit_sum);
        if (i_digit_sum == K) {
            result++;
        }
    }
    // console.log("-----------");
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));