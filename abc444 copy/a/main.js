"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const S = input[line++].split("");
    if (S[0] == S[S.length - 1]) {
        console.log("Yes");
        return;
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));