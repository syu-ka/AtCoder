function Main(input) {
    const x = Number(input[0]);
    let answer;
    if (x >= 38.0) {
        answer = 1;
    } else if (x >= 37.5) {
        answer = 2;
    } else {
        answer = 3;
    }
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));