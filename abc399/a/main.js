const { count } = require("console");

function Main(input) {
    const n = Number(input[0]);
    const s = input[1].split("");
    const t = input[2].split("");

    let count = 0;
    // sとtの各文字を比較して異なる文字の個数をカウント.
    // sとtの長さは同じなので、nを使ってループ.
    for (let i = 0; i < n; i++) {
        if (s[i] !== t[i]) {
            count++;
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));