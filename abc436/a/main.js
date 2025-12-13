function Main(input) {
    const N = Number(input[0]);
    const S = input[1].split("");
    const minas = N - S.length;
    const o = []
    for (let i = 0; i < minas; i++) {
        o.push("o");
    }
    console.log(`${o.join("")}${S.join("")}`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));