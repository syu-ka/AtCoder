function Main(input) {
    const n = Number(input[0]);
    const t = input[1].split("");
    const a = input[2].split("");

    for (let i = 0; i < n; i++) {
        if (t[i] === "o" && a[i] === "o") return console.log("Yes");
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));