function Main(input) {
    const [A, B, C, X] = input.splice(0, 4).map(Number);
    let count = 0; //何通りあるかのカウント.
    for (let i = 0; i <= A; i++) {
        for (let j = 0; j <= B; j++) {
            for (let k = 0; k <= C; k++) {
                const sum = i * 500 + j * 100 + k * 50;
                if (sum === X) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));