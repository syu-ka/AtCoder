function Main(input) {
    const [N, Y] = input[0].split(" ").map(Number);
    const kind = [10000, 5000, 1000];
    let isPossible = false;

    for (let i = 0; i <= N; i++) {
        for (let j = 0; j <= i; j++) {
            let temp1 = (N - i) * kind[0] + j * kind[1] + (i - j) * kind[2];
            let temp2 = (N - i) * kind[0] + (i - j) * kind[1] + j * kind[2];

            if (temp1 == Y) {
                isPossible = true;
                console.log((N - i), j, (i - j));
                break;
            } else if (temp2 == Y) {
                isPossible = true;
                console.log((N - i), (i - j), j);
                break;
            }

        }
        if (isPossible) break;
    }
    if (!isPossible) console.log(-1, -1, -1);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));