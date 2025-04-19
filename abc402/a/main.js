function Main(input) {
    let answer = "";
    const s = input[0].split("");

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            answer += s[i];
        }
    }
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));