function Main(input) {
    const [x, c] = input[0].split(" ").map(Number);
    let i = Math.floor(x / 1000) * 1000;
    // console.log(i);
    while (true) {
        if (i <= 0) {
            console.log(0);
            break;
        }
        if (i + (i * c / 1000) <= x) {
            console.log(i);
            break;
        }
        i -= 1000;
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));