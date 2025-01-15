function Main(input) {
    const N = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    a.sort((a, b) => {
        return b - a;
    });

    let aliceSum = 0;
    let bobSum = 0;
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
            aliceSum += a[i];
        } else {
            bobSum += a[i];
        }
    }
    console.log(aliceSum - bobSum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));