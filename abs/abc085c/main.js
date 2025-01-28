function Main(input) {
    const [N, Y] = input[0].split(" ").map(Number);
    const Ydiv1000 = Y / 1000;
    // console.log(N, Y);
    const kind = [10000, 5000, 1000];
    const kindDiv1000 = [10, 5, 1];
    let isPossible = false;

    for (let i = 0; i <= N; i++) {
        // console.log(i);
        for (let j = 0; j <= i; j++) {
            // console.log(i, j);
            // console.log((N - i), j, (i - j));
            let temp1 = (N - i) * kindDiv1000[0] + j * kindDiv1000[1] + (i - j) * kindDiv1000[2];
            let temp2 = (N - i) * kindDiv1000[0] + (i - j) * kindDiv1000[1] + j * kindDiv1000[2];

            if (temp1 == Ydiv1000) {
                isPossible = true;
                console.log((N - i), j, (i - j));
                break;
            } else if (temp2 == Ydiv1000) {
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