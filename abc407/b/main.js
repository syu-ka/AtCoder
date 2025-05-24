function Main(input) {
    const [x, y] = input[0].split(" ").map(Number);
    // 条件1:2 つの出目の合計が X 以上である。
    // 条件2:2 つの出目の差の絶対値が Y 以上である。
    let condition1and2_count = 0;
    // let condition2 = 0;
    for (let i = 1; i <= 6; i++) { // i はサイコロ1の出目
        for (let j = 1; j <= 6; j++) { // j はサイコロ2の出目
            // 条件1を満たす場合
            if (i + j >= x) {
                condition1and2_count++;
                continue; // 条件2をチェックする前に条件1を満たす場合は次のループへ
            }
            // 条件2を満たす場合.但し、条件1を満たさない場合
            if (Math.abs(i - j) >= y) {
                condition1and2_count++;
            }
        }
    }

    // 全ての組み合わせは 6 * 6 = 36 通り
    const totalCombinations = 6 * 6;
    // answer:上記の条件を少なくとも 1 つ満たす確率.
    let answer = condition1and2_count / totalCombinations;
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));