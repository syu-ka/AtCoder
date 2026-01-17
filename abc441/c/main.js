"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const [N, K, X] = input[line++].split(" ").map(Number);
    // N:総カップ数, K:日本酒のカップ数, X:Xml以上日本酒を飲みたい.
    const M = N - K; // M:水のカップ数.

    const A = input[line++].split(" ").map(Number); // A[i]:i番目のカップに入っている液体の量(mL).
    const A_sort = A.toSorted((a, b) => {
        return a - b;
    });

    let current_mL = 0;
    let ans_cap = Infinity;

    // お酒のカップを調べる.
    for (let i = 1; i <= K; i++) {
        current_mL += A_sort[i - 1]; //i-1なのはA_sortが0-indexedであるため
        if (current_mL >= X) {
            ans_cap = Math.min(ans_cap, i + M); // 水カップを全て飲み干していないと、日本酒のカップである保証がないから.

        }
    }
    if (ans_cap == Infinity) {
        console.log(-1);
    } else {
        console.log(ans_cap);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));