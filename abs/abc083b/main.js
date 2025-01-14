function Main(input) {
    const test = input[0].split(" ");
    console.log(test);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));