function Main(input) {
    const q = Number(input[0]);
    // let a = [];
    let index = 1; // valueや continuous_countのインデックスを管理するための変数
    let value = {};
    let continuous_count = {}
    let sum_value = {}; // 各インデックスの値の合計を管理するためのオブジェクト
    let tmp_sum_value = 0; // 一時的な合計値を管理するための変数

    let deleted_index = 0; // 削除されたインデックスを管理するための配列.インデックスは先頭から順に削除されるため、削除されたインデックスの数を管理する変数として使用
    for (let i = 1; i <= q; i++) {
        let query = input[i].split(" ").map(Number);
        if (query[0] === 1) {
            sum_value[index] = tmp_sum_value; // 現在の合計値を保存
            value[index] = query[2];
            continuous_count[index] = query[1];
            tmp_sum_value += query[2] * query[1]; // 一時的な合計値を更新
            index += continuous_count[index];
            // console.log(`i`, i, `index`, index, `value`, value, `continuous_count`, continuous_count, `sum_value`, sum_value);
        } else if (query[0] === 2) {
            deleted_index += query[1];
            // console.log(`deleted_index`, deleted_index);
            let array = filterKeysByValue(value, deleted_index);
            // console.log(`array`, array);
            difference = deleted_index - array[array.length - 1];
            answer = sum_value[array[array.length - 1]] + (difference + 1) * value[array[array.length - 1]];

            // 答えを出力
            console.log(answer);
        }
    }
}

function filterKeysByValue(obj, maxIndex) {
    return Object.keys(obj).filter(key => {
        const numIndex = Number(key);
        return !isNaN(numIndex) && numIndex <= maxIndex;
    });
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));