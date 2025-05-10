function Main(input) {
    const n = Number(input[0]);

    // const a = input[1].split(" ").map(Number);
    const a = input[1].split(" ").map(BigInt);

    // let tmp_sum = 0;
    let tmp_sum = BigInt(0);

    // let sum = new Array(n).fill(0); // sum[i]:a[i]からa[n-1]までの和.
    let sum = new Array(n).fill(BigInt(0)); // sum[i]:a[i]からa[n-1]までの和.

    // let answer = 0;
    let answer = BigInt(0);
    // console.log(sum);

    for (let i = 1; i < n; i++) {
        tmp_sum += a[n - i];
        sum[n - i] = tmp_sum;
    }
    // console.log(sum);

    for (let i = 0; i < n - 1; i++) {
        answer += a[i] * sum[i + 1];
    }
    // console.log(n);
    // console.log(a);

    // console.log(answer);
    console.log(answer.toString());
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));