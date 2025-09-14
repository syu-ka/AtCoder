function Main(input) {
    let [i, j] = input[0].split("-").map(Number);
    if (j < 8) {
        j++;
    } else if (i < 8) {
        i++;
        j = 1;
    }
    console.log(`${i}-${j}`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));