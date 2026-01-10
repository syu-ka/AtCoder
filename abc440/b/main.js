function Main(input) {
    const [X, Y] = input[0].split(" ").map(Number);
    console.log(X * (2 ** Y));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));