function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);
    a.sort((x, y) => x - y);
    const a_max = a[a.length - 1];
    // console.log(n, q, a, a_max);
    let level_to_minX = {};
    level_to_minX[1] = 1; // 初期値として1を設定
    let tmp_count = 0;
    let teaBag_count_to_teaKind_count = {}; // 茶葉の個数から茶葉の種類の個数へのマッピング

    for (let i = 0; i < n; i++) {
        teaBag_count_to_teaKind_count[a[i]] = (teaBag_count_to_teaKind_count[a[i]] || 0) + 1;
    }
    // console.log(`teaBag_count_to_teaKind_count=${JSON.stringify(teaBag_count_to_teaKind_count)}`);

    let tmp_number_or_higher_count = a.length; // 現在の数以上の数の個数
    for (let i = 2; i <= a_max; i++) {
        // console.log(`---i=${i}---`);
        tmp_number_or_higher_count -= teaBag_count_to_teaKind_count[i - 1] || 0;
        if (teaBag_count_to_teaKind_count[i - 1] === undefined) {
            // console.log("あ");
            level_to_minX[i] = level_to_minX[i - 1] + tmp_number_or_higher_count;
        } else {
            level_to_minX[i] = level_to_minX[i - 1] + tmp_number_or_higher_count + teaBag_count_to_teaKind_count[i - 1];
        }
        // console.log(`tmp_number_or_higher_count=${tmp_number_or_higher_count}`);
        // console.log(`level_to_minX[${i}]=${level_to_minX[i]}`);
    }


    // console.log(`level_to_minX[1]=${level_to_minX[1]}`);
    // console.log(`level_to_minX[2]=${level_to_minX[2]}`);
    // console.log(`level_to_minX[3]=${level_to_minX[3]}`);
    // console.log(`level_to_minX[4]=${level_to_minX[4]}`);
    // console.log(`level_to_minX[5]=${level_to_minX[5]}`);
    // console.log(`level_to_minX[6]=${level_to_minX[6]}`);
    // console.log(`level_to_minX[7]=${level_to_minX[7]}`);
    // console.log(`level_to_minX[8]=${level_to_minX[8]}`);
    // console.log(`level_to_minX[9]=${level_to_minX[9]}`);
    // console.log(`level_to_minX[10]=${level_to_minX[10]}`);
    // console.log("---answer---");
    for (let i = 0; i < q; i++) {
        const b = Number(input[i + 2]);
        // console.log(`b=${b}`);
        if (b <= a_max) {
            console.log(level_to_minX[b]);
        } else {
            console.log(-1);
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));