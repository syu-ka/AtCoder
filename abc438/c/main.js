const { NONAME } = require("dns");

function Main(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    let delete_area = {
        "start": null,
        "end": null
    }
    let not_delete_count = 0;
    let prefix_sum = []; // Aの累積和.
    prefix_sum[0] = 0;
    let prefix_tmp_sum = 0; // 累積和作成用.
    // 累積和作成.
    for (let i = 0; i < N; i++) {
        prefix_tmp_sum += A[i];
        prefix_sum[i + 1] = prefix_tmp_sum;
    }

    // 1番最初に消せる所を探す.
    for (let i = 0; i < N - 3; i++) {
        // 4文字連続同じ数字.
        if (A[i] == A[i + 1] && A[i + 1] == A[i + 2] && A[i + 2] == A[i + 3]) {
            console.log(i);
            delete_area["start"] = i;
            delete_area["end"] = i + 3;
            break;
        }
    }

    for (let i = delete_area["end"] + 1; i < N - 3; i++) {

    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));