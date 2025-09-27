function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);

    // 答え用配列.
    let total_l_to_r = [];  // l番目からr番目までの和.

    let sum_a = new Array(n + 1).fill(-1);  // aの累積和.
    for (let i = 0, tmp_sum = 0; i <= n; i++) {
        sum_a[i] = tmp_sum;
        tmp_sum += a[i];
    }

    let shiftAndPush_count = 0;  // 配列aをshiftしてpushした回数.
    for (let i = 2; i < 2 + q; i++) {
        const [kind, elem1, elem2] = input[i].split(" ").map(Number);
        if (kind === 1) {
            const c = elem1;    // c回shiftしてpushする.
            shiftAndPush_count = (shiftAndPush_count + c) % n;
            // nで割ったあまりをとることで、n回shiftしてpushした場合は元の配列に戻ることを利用.
        } else if (kind === 2) {
            const l = elem1;
            const r = elem2;

            /* l番目からr番目までの和を求める.*/
            let l_after_shiftAndPush = (l - 1 + shiftAndPush_count) % n;  // 操作後l番目の要素のindex.lは1始まりなので-1している.
            let r_after_shiftAndPush = (r - 1 + shiftAndPush_count) % n;  // 操作後r番目の要素のindex. rは1始まりなので-1している.
            if (l_after_shiftAndPush <= r_after_shiftAndPush) {    // arrayの端をまたがない場合.
                total_l_to_r.push(sum_a[r_after_shiftAndPush + 1] - sum_a[l_after_shiftAndPush]);
            } else {    // arrayの端をまたぐ場合.
                total_l_to_r.push(sum_a[n] - sum_a[l_after_shiftAndPush] + sum_a[r_after_shiftAndPush + 1]);
            }

            // console.log("--- query ---");  // --- IGNORE ---
            // console.log(`l=${l}, r=${r}, shiftAndPush_count=${shiftAndPush_count}`);  // --- IGNORE ---
            // console.log(`sum_a[r_after_shiftAndPush + 1]=${sum_a[r_after_shiftAndPush + 1]}`);  // --- IGNORE ---
            // console.log(`sum_a[l_after_shiftAndPush]=${sum_a[l_after_shiftAndPush]}`);  // --- IGNORE ---
            // console.log(`total_l_to_r=${total_l_to_r}`);  // --- IGNORE ---
        }
    }
    // console.log("=== result ===");  // --- IGNORE ---
    // console.log(`a=${a}`);  // --- IGNORE ---
    // console.log(`sum_a=${sum_a}`);  // --- IGNORE ---
    // console.log(`total_l_to_r=${total_l_to_r}`);  // --- IGNORE ---
    console.log(total_l_to_r.join("\n"));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));