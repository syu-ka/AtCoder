function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    let answer = "No";
    for (let i = 2; i < n; i++) {
        if (a[i - 2] === a[i - 1] && a[i - 1] === a[i]) {
            answer = "Yes";
            break;
        }
    }
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));