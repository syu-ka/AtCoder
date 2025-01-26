function Main(input) {
    const N = Number(input[0]);
    let d = [];
    let kind = [];
    for (let i = 0; i < N; i++) {
        d.push(Number(input[i + 1]));
        for (let j = -1; j < kind.length; j++) {
            if (d[i] == kind[j]) break;
            if (j == kind.length - 1) kind.push(d[i]);
        }
    }

    console.log(kind.length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));