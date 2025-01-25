function Main(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    const commonRatio = A[1] / A[0];
    let isGeometricProgression = true;
    for (let i = 1; i < A.length; i++) {
        if (A[i] !== A[i - 1] * commonRatio) {
            isGeometricProgression = false;
        }
    }
    if (isGeometricProgression) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));