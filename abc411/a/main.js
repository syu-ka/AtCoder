function Main(input) {
    const p = input[0].split("");
    const l = Number(input[1]);
    if (p.length >= l) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));