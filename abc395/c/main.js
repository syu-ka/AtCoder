function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);

    let answer;

    let count = {};

    for (let i = 0; i < n; i++) {
        let elm = a[i];
        let index = i;

        if (count[elm]) {
            if (answer) {
                answer = Math.min(index - count[elm][1] + 1, answer);
            } else {
                answer = index - count[elm][1] + 1;
            }
            count[elm] = [count[elm][0] + 1, index];
        } else {
            count[elm] = [1, index];
        }
    }

    if (answer) {
        console.log(answer);
    } else {
        console.log(-1);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));