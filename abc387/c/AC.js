//他の人が解いたACになるコード.
function Main(input) {
    input = input.split("\n").map((line) => line.trim());
    const [L, R] = input[0].split(" ").map(BigInt);

    // b_getLength(a): aの桁数を返す
    // b_getNumber(a, i): aのi桁目の数値を返す
    // b_min(...arr): arrの最小値を返す
    const b_getLength = (a) => a.toString().length;
    const b_getNumber = (a, i) => BigInt(a.toString()[i]);
    const b_min = (...arr) => arr.reduce((a, b) => (a < b ? a : b), arr[0]);

    // count(n): nと同じ桁数で、最上位の数字が同じであるn以下のヘビ数の総数を返す
    const count = (n) => {
        // len:= nの桁数 lead:= nの最上位桁の数値
        const len = b_getLength(n);
        const lead = b_getNumber(n, 0);

        // dp[i][j]:= i桁目までヘビ数がいくつあるか。jは未満フラグ。
        // j=0のときn未満が確定しており、j=1のときn以上となる可能性があることを示す。
        const dp = Array(len).fill(0).map(() => Array(2).fill(0n));
        dp[0][1] = 1n;
        for (let i = 1; i < len; i++) {
            const ni = b_getNumber(n, i);
            // 前の桁で未満フラグが立っている時、次の桁で選択できる数はlead通りある
            // 未満フラグが立っていない時、niを超えることはできないので通り数はniかleadのどちらか小さい方
            dp[i][0] += dp[i - 1][0] * lead + dp[i - 1][1] * b_min(ni, lead);
            // 前の桁で未満フラグが立っていない、かつniがleadよりも小さい時に限り、次の桁でもn以上か考慮が必要
            if (dp[i - 1][1]) dp[i][1] = ni < lead ? 1n : 0n;
        }
        return dp[len - 1][0] + dp[len - 1][1];
    };

    // countAll(n): n以下のヘビ数の総数を返す
    const countAll = (n) => {
        const len = b_getLength(n);
        const lead = b_getNumber(n, 0);

        let ans = 0n;
        // 11~99,111~999,...の順に桁数(i)と最上位の数字(j)ごとにヘビ数を数える
        for (let i = 1; i <= len; i++) {
            for (let j = 1; j < 10; j++) {
                // len桁目がleadよりも大きい時、nより大きい部分を探索しているので終了
                if (i == len && j > lead) return ans;
                // len桁目がleadと等しい時、n以下のヘビ数を数える
                else if (i == len && j == lead) ans += count(n);
                // 上に当てはまらない時、jで始まるi桁のヘビ数全てを数える（j999...が最大）
                else ans += count(`${j}${"9".repeat(i - 1)}`);
            }
        }
        return ans;
    };

    // Rまでのヘビ数からL-1までのヘビ数を引けば良い
    let ans = countAll(R) - countAll(L - 1n);
    console.log(ans.toString());
}

Main(require("fs").readFileSync(0, "utf8"));