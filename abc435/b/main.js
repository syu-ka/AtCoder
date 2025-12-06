function Main(input) {
    let answer = 0;
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    let prefix_sum = Array.from({ length: N }, (_, i) => 0);
    let tmp_sum = 0;
    for (let i = 0; i < N; i++) {
        // Aの累積和を求める.
        tmp_sum += A[i];
        prefix_sum[i] = tmp_sum;
    }
    // console.log(prefix_sum);
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            l_to_r_sum = prefix_sum[j] - (prefix_sum[i - 1] || 0);
            for (let k = i; k <= j; k++) {
                remainder = l_to_r_sum % A[k];
                if (remainder == 0) {
                    break;
                }
                if (k == j) {
                    answer++;
                }
            }
        }
    }
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));