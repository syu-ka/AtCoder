const { tmpdir } = require("os");

function Main(input) {
    const T = Number(input[0]);
    // T: テストケース数.

    let current_row = 1;
    for (let i = 1; i <= T; i++) {
        const [N, H] = input[current_row].split(" ").map(Number);
        // N: 目標個数. H: 初期高度.

        let tmp_h = H; // 現在の高度.
        let tmp_t = 0; // 現在の時間.
        for (let j = 1; j <= N; j++) {
            const [t, l, u] = input[current_row].split(" ").map(Number);
            // t秒時点で高度 l 以上 i 以下.

            const [n_t, n_l, n_u] = input[current_row + 1].split(" ").map(Number);
            // n_t: 次のt. n_l: 次のl. n_u: 次のu.

            let min_dis = Math.min(Math.abs(tmp_h - l), Math.abs(tmp_h - u)); // min_dis: 最短距離.
            let until_dead_time = t - tmp_t;
            if (min_dis > until_dead_time) {
                console.log("No");
                break;
            }

            // 次に向けての準備.
            let n_goal; // n_goal: 次の目標.
            if (Math.sign(n_l - tmp_h) + Math.sign(n_u - tmp_h) == 0) {
                // tmp_h が既に次の目標内にある.
                n_goal = (n_l + n_u) / 2; // 次の目標範囲の中央値.
            } else if (Math.sign(n_l - tmp_h) + Math.sign(n_u - tmp_h) > 0) {
                // tmp_h < 次の目標.
                n_goal = n_l;
            } else {
                // 次の目標 < tmp_h.
                n_goal = n_u;
            }


        }
        current_row += N + 1;
    }
    const test2 = input[1].split(" ").map(Number);
    console.log(test1);
    console.log(test2);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));