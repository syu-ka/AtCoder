"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const [P, Q] = input[line++].split(" ").map(Number);
    const [X, Y] = input[line++].split(" ").map(Number);
    if (P <= X && X < P + 100 && Q <= Y && Y < Q + 100) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));