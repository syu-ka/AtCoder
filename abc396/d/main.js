function Main(input) {
    const [n, m] = Number(input[0]);
    // n:頂点の数, m:辺の数.
    for (let i = 1; i <= m; i++) {
        let [u, v, w] = input[i].split(" ").map(Number);
        console.log(a, b);
    }
    const test2 = input[1].split(" ").map(Number);
    console.log(test1);
    console.log(test2);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));