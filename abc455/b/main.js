"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let result = 0; // 点対称に塗られているものの個数.

    // 入力.
    let line = 0;
    const [h, w] = input[line++].split(" ").map(Number);
    let s = [];
    for (let i = 0; i < h; i++) {
        s.push(input[line++].split(""));
    }

    // 点対称判定.
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            for (let h1 = 0; h1 <= i; h1++) {
                for (let w1 = 0; w1 <= j; w1++) {
                    for (let h2 = i; h2 < h; h2++) {
                        for (let w2 = j; w2 < w; w2++) {
                            if (s[i][j] == s[h1 + h2 - i][w1 + w2 - j]) {
                                result++;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));