function Main(input) {
    const n = Number(input[0]);
    const s = input[1].split("");
    if (s[n - 3] === "t" && s[n - 2] === "e" && s[n - 1] === "a") {
        console.log("Yes");
        return;
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));