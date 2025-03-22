function Main(input) {
    const n = Number(input[0]);
    let answer = "";

    if (n % 2 === 0) {
        for (let i = 0; i < (n - 2) / 2; i++) {
            answer += "-";
        }
        answer += "==";
        for (let i = 0; i < (n - 2) / 2; i++) {
            answer += "-";
        }
    } else {
        for (let i = 0; i < (n - 1) / 2; i++) {
            answer += "-";
        }
        answer += "=";
        for (let i = 0; i < (n - 1) / 2; i++) {
            answer += "-";
        }
    }
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));