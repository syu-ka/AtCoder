function Main(input) {
    const [a, b, c] = input[0].split(" ").map(Number);
    if (a == b || b == c || c == a) {
        console.log("Yes");
        return;
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));