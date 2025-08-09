function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);
    let a_max = 0; // 配列aの最大値を保持する変数.
    let level_to_minX = {}; // 難易度と最小Xのマッピング
    level_to_minX[1] = 1; // 初期値として1を設定
    let teaBag_count_to_teaKind_count = {}; // ティーバッグの個数から茶葉の種類数(フレーバー数)へのマッピング

    for (let i = 0; i < n; i++) {
        a_max = Math.max(a_max, a[i]);
        teaBag_count_to_teaKind_count[a[i]] = (teaBag_count_to_teaKind_count[a[i]] || 0) + 1;
    }

    let i_or_higher_count = a.length; // 「i以上のティーバッグの個数」のフレーバー数.i=1から始めるため、初期値はa.length
    for (let i = 2; i <= a_max; i++) {
        i_or_higher_count -= teaBag_count_to_teaKind_count[i - 1] || 0;

        level_to_minX[i] = level_to_minX[i - 1] + i_or_higher_count;

        if (teaBag_count_to_teaKind_count[i - 1] !== undefined) {
            level_to_minX[i] += teaBag_count_to_teaKind_count[i - 1];
        }
    }

    // クエリに対する処理
    for (let i = 0; i < q; i++) {
        const b = Number(input[i + 2]);
        if (b <= a_max) {
            console.log(level_to_minX[b]);
        } else { // どのフレーバーもb個未満.
            console.log(-1); // 「b個のティーバッグがすべて同じフレーバー」にすることは不可能なため、-1を出力.
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));