"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const N = Number(input[line++]);

    let m = 0; // Sの最大文字数.
    for (let i = 0; i < N; i++) {
        let S = input[i + 1].split("");
        if (m < S.length) {
            m = S.length;
        }
    }
    // console.log(N);
    // console.log(m);

    for (let i = 0; i < N; i++) {
        let S = input[i + 1].split("");
        let k = Math.ceil((m - S.length) / 2);
        // console.log(k);
        let dot_arr = Array(k).fill(".");
        let answer = dot_arr.concat(S, dot_arr);
        console.log(answer.join(""));
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));