function Main(input) {
    const a = Number(input[0]);
    const person = 400;
    // person: 人数.
    if (person % a === 0) {
        console.log(person / a);
    } else {
        console.log(-1);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));