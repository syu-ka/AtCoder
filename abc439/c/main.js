const { NONAME } = require("dns");

function Main(input) {
    const N = Number(input[0]);
    let square_num = [];
    let answer = [];
    for (let i = 1; i < N; i++) {
        let tmp_square_num = i ** 2;
        if (tmp_square_num >= N) break;
        square_num.push(tmp_square_num);
    }

    for (let i = 0; i < square_num.length - 1; i++) {
        for (let j = i + 1; j < square_num.length; j++) {
            let tmp_answer = square_num[i] + square_num[j];
            if (tmp_answer > N) break;
            answer.push(tmp_answer);
        }
    }

    answer.sort((a, b) => { return a - b; })


    // console.log(square_num);
    // console.log(answer.length);
    let only_answer_arr = [];
    let prev_only_answer = answer[0];
    for (let i = 0; i < answer.length; i++) {
        let tmp_only_answer = answer[i];
        if (tmp_only_answer != prev_only_answer) {
            only_answer_arr.push(only_ans);
        }
        prev_only_answer = tmp_only_answer;
    }
    console.log(only_answer_arr.length);
    console.log(only_answer_arr.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));