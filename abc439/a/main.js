function Main(input) {
    const N = Number(input[0]);

    let factorial = 2 ** N; // 階乗.
    let multiplication2 = 2 * N; // 2の掛け算.

    console.log(factorial - multiplication2);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));