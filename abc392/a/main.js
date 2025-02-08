function Main(input) {
    const A = input[0].split(" ").map(Number);
    // console.log(A);

    if (A[0] * A[1] == A[2] || A[0] * A[2] == A[1] || A[1] * A[2] == A[0]) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));