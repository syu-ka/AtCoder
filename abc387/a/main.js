function Main(input) {
    const [a, b] = input[0].split(" ").map(Number);
    const add = a+b;
    const square = add * add;
    console.log(square);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));