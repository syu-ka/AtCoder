"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    let S = input[line++].split("");
    let count = {};
    for (let i = 0; i < S.length; i++) {
        let elem = S[i];
        count[elem] = (count[elem] || 0) + 1;
    }

    let max_count = 0;
    // 最多登場アルファベットを取り出すためのfor_in構文.
    for (let elem in count) {
        if (max_count <= count[elem]) {
            max_count = count[elem];
        }
        // console.log(`elem:${elem}, count[elem]:${count[elem]}`);
    }

    let max_count_str = [];
    // 種類（key）を取り出すためのfor_in構文.
    for (let elem in count) {
        if (max_count == count[elem]) {
            max_count_str.push(elem);
        }
        // console.log(`elem:${elem}, count[elem]:${count[elem]}`);
    }

    // console.log(max_count);
    // console.log(max_count_str);
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < max_count_str.length; j++) {
            if (max_count_str[j] == S[i]) {
                S[i] = "";
            }
        }
    }

    console.log(S.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));