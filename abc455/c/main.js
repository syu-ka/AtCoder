"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const [n, k] = input[line++].split(" ").map(Number);
    const a = input[line++].split(" ").map(Number);

    // console.log("k=" + k);

    let count = {};
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let elem = a[i];
        count[elem] = (count[elem] || 0) + elem;
        sum += elem;
    }

    let count_arr = [count];

    count_arr.sort((a, b) => {
        return count.a - count.b;
    });
    console.log(count_arr);


    // let cnt_up = 1;
    // let delete_index;
    // for (let i = 0; i < n; i++) {
    //     if (a[i] != a[i + 1]) {
    //         cnt_up++;
    //         // console.log("cnt_up=" + cnt_up);
    //         if (cnt_up > k) {
    //             delete_index = i + 1;
    //             break;
    //         }
    //     }
    // }
    // // console.log(delete_index);

    // let min_sum = 0;
    // for (let i = delete_index; i < n; i++) {
    //     min_sum += a[i];
    // }


    // console.log(min_sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));