"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const N = Number(input[line++]);
    const A = input[line++].split(" ").map(Number);
    const A_i_m = Array.from({ length: N }, (_, i) => ({
        value: A[i],
        masu: i + 1
    }));

    // console.log(N);
    // console.log(A);
    // console.log(A_i_m);
    let answer_ans = [];
    let used_masu = new Set();
    let answer_arr = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        if (used_masu.has(A_i_m[i].masu)) {
            answer_ans.push(answer_arr[i]);
            continue;
        }

        let tmp_masu = A_i_m[i].masu;
        let tmp_masu_arr = [];
        // console.log("tmp_masu=" + tmp_masu);

        for (let j = 0; j < 10 ** 100; j++) {
            tmp_masu_arr.push(tmp_masu);

            if (used_masu.has(tmp_masu)) {
                break;
            }

            used_masu.add(tmp_masu);

            // コマが動かなくなったら終了.
            if (A_i_m[tmp_masu - 1].value == A_i_m[tmp_masu - 1].masu) {
                for (let k = 0; k < tmp_masu_arr.length; k++) {
                    answer_arr[tmp_masu_arr[k] - 1] = A_i_m[tmp_masu - 1].value;
                }
                answer_ans.push(answer_arr[i]);
                break;
            }
            tmp_masu = A_i_m[tmp_masu - 1].value;
        }
    }

    // console.log("used_masu=" + used_masu);
    // console.log(answer_arr);
    console.log(answer_ans.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));