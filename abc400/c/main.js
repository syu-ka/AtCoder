function Main(input) {
    let count = 0;
    const n = BigInt(input[0]); // nの制約が大きいので、BigIntを使用する.

    for (let i = 2; i <= n; i *= 2) {
        // i: 問題文中の2^aの部分.

        /* √(n / 2^a) 以下の奇数の個数をカウントする. */
        count += Math.floor((Number(sqrt_bigint(n / BigInt(i))) + 1) / 2); // Mathオブジェクトを使用するため、Numberに変換して計算.Number変換前にsqrt_bigintをすることでNumberで扱える桁数(2^53未満)にし、変換後も精度を落とさないようにしている.

    }

    console.log(count);
}

/* BigInt型の正の平方根を求める関数.
Math.sqrt()のBigInt型バージョン */
function sqrt_bigint(x) {
    if (x < 2n) return x;

    let a = 1n;
    let b = x;

    while (a <= b) {
        let mid = (a + b) / 2n;
        let m2 = mid * mid;
        if (m2 === x) {
            return mid;
        } else if (m2 < x) {
            a = mid + 1n;
        } else {
            b = mid - 1n;
        }
    }

    return b;
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));