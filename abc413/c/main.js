function Main(input) {
    const test1 = Number(input[0]);
    const test2 = input[1].split(" ").map(Number);
    console.log(test1);
    console.log(test2);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));