"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const t1 = Number(input[line++]);
    const t2 = input[line++].split(" ").map(Number);
    console.log(t1);
    console.log(t2);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));