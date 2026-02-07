"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const N = input[line++].split("").map(Number);
    for (let i = 1; i < N.length; i++) {
        if (N[i] !== N[0]) {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));