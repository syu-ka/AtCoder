"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const [N, M] = input[line++].split(" ").map(Number);
    let minOK = M * 2 - 1;
    if (N >= minOK) {
        console.log("Yes");
        return;
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));