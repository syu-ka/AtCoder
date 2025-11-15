function Main(input) {
    const abc = input[0].split(" ").map(Number);
    const [a, b, c] = input[0].split(" ").map(Number);
    abc.sort((a, b) => b - a);
    console.log(abc.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));