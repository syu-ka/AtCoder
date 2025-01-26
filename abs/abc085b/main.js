function Main(input) {
    const N = Number(input[0]);
    let d = [];
    for (let i = 0; i < N; i++) {
        d.push(Number(input[i + 1]));
    }
    const set = new Set(d);
    console.log(set.size); //lengthではなくsize.
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));