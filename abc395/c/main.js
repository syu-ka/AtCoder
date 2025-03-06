// https://atcoder.jp/contests/abc395/tasks/abc395_c
/*
方針：
aに過去に出てきた値が出てきたら、過去出てきたときのindexと現在のindexで差を取ることで"同じ値を複数含む部分列の長さ"を求める.

どの数字がいつ出てきたか求めるために、
aの各要素をprev_indexのkeyとして設定し、そのkeyの値として「過去出てきたときのindex」を設定する.

*/
function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number); //長さnの整数列.

    let answer;

    let prev_index = {};

    for (let i = 0; i < n; i++) {
        let elm = a[i];
        let curt_index = i;

        // 過去にelmが出てきたことがある.
        if (prev_index[elm]) {
            // 既にanswerが存在する.
            if (answer) {
                // 現在のanswerより短いときanswer更新.
                answer = Math.min(curt_index - prev_index[elm] + 1, answer);
            } else {
                // answerを設定.
                answer = curt_index - prev_index[elm] + 1;
            }

            // 最新のindexを設定.
            prev_index[elm] = curt_index;
        } else {
            //初めて出てきた数字elmのindexを設定.
            prev_index[elm] = curt_index;
        }
    }

    if (answer) {
        console.log(answer);
    } else {
        console.log(-1);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));