function Main(input) {
    const s = input[0].split("").map(Number);
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 2) {
            answer.push(2);
        }
    }

    console.log(answer.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));