function Main(input) {
    const X = Number(input[0]);
    let N = 1;
    let Nfactorial = 1; //Nの階乗.
    while (Nfactorial != X) {
        N++;
        Nfactorial *= N;
    }
    console.log(N);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));