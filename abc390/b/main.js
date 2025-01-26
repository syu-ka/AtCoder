function Main(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(BigInt);
    let isGP = true; //等比数列(GeometricProgression)か.

    for (let i = 0; i < (N - 2); i++) {
        // 等比中項でなければ、等比数列ではない.
        if (A[i] * A[i + 2] != A[i + 1] * A[i + 1]) isGP = false;
    }

    isGP ? console.log("Yes") : console.log("No");

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));