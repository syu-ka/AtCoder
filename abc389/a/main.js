function Main(input) {
    const S = input[0].split("");

    console.log(Number(S[0]) * Number(S[2]));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));