const { NONAME } = require("dns");

function Main(input) {
    const N = Number(input[0]);
    let square_num = [];
    for (let i = 1; i < N; i++) {
        let tmp_square_num = i ** 2;
        if (tmp_square_num >= N) break;
        square_num.push(tmp_square_num);
    }

    let s_s_set = new Set(); // 平方数の和のSet.
    let s_s_duplication = []; // 平方数の和で重複した値.
    for (let i = 0; i < square_num.length - 1; i++) {
        for (let j = i + 1; j < square_num.length; j++) {
            let tmp_answer = square_num[i] + square_num[j];
            if (tmp_answer > N) break;
            if (s_s_set.has(tmp_answer)) {
                s_s_duplication.push(tmp_answer);
            }
            s_s_set.add(tmp_answer);
        }
    }

    // 重複した値を削除.
    for (duplication of s_s_duplication) {
        s_s_set.delete(duplication);
    }

    let answer = [];
    for (ans of s_s_set) {
        answer.push(ans);
    }

    answer.sort((a, b) => { return a - b; })

    console.log(answer.length);
    console.log(answer.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));