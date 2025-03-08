function Main(input) {
    let n = Number(input[0]);
    let answer = [];
    let count = 0;
    let amari;
    let amariMoji = {
        0: 4,
        1: 3,
        2: 3
    }
    let english = {
        0: ["O", "R", "E", "Z"],
        1: ["E", "N", "O"],
        2: ["E", "W", "T"],
    }
    console.log(english[0]);
    let isDone = false;
    for (let i = 1; i <= n; i++) {
        amari = i % 3;

        for (let j = 1; j <= i; j++) {
            count += amariMoji[amari];

            if (count >= 100 && !isDone) {
                answer.push(english[amari][count - 100]);
                isDone = true;
            }

            if (count >= 1000) {
                count -= 1000;
                isDone = false;
            }
        }
        console.log(count);
    }
    console.log(answer.join(''));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));