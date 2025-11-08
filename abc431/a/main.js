function Main(input) {
    let necessary_weight = 0;
    const [h, b] = input[0].split(" ").map(Number);
    if (h > b) {
        necessary_weight = h - b;
    }
    console.log(necessary_weight);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));