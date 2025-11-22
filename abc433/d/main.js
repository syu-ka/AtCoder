function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);
    // a: 長さnの正整数列.
    // m: f(a_i, a_j)はmの倍数.

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let tmp_comb = [a[i], a[j]];
            if (tmp_comb[0] % m == 0 && tmp_comb[1] % m == 0) {
                // console.log(tmp_comb);
                count++;
            } else if (tmp_comb.join("") % m == 0) {
                // console.log(tmp_comb);
                count++;
            }
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));