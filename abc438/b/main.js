function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const S = input[1].split("").map(Number);
    const T = input[2].split("").map(Number);
    let min_count = 999999;
    for (let i = 0; i <= N - M; i++) {
        // console.log("reset");
        let tmp_count = 0;
        for (let j = 0; j < M; j++) {
            // T[j]をS[i+j]にするのにかかる回数.
            if (S[i + j] < T[j]) {
                tmp_count += (S[i + j] + 10) - T[j];
            } else {
                tmp_count += S[i + j] - T[j];
            }
            // console.log(tmp_count);
        }
        min_count = Math.min(tmp_count, min_count);
    }
    console.log(min_count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));