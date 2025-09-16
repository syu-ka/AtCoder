function Main(input) {
    const [n, r] = input[0].split(" ").map(Number);
    const l = input[1].split(" ").map(Number);

    let left_start_num; // 左始まりで初めて0が来たインデックス数.
    let is_left_started = false; // 左始まりで0が来たかどうか.
    let right_start_num; // 右始まりで初めて0が来たインデックス数.
    let is_right_started = false; // 右始まりで0が来たかどうか.


    for (let i = 0; i < n; i++) {
        if ((l[i] == 0 || r <= i) && !is_left_started) {
            left_start_num = i;
            is_left_started = true;
        }

        if ((l[n - 1 - i] == 0 || n - 1 - i <= r - 1) && !is_right_started) {
            right_start_num = n - 1 - i;
            is_right_started = true;
        }
    }
    // console.log(left_start_num, right_start_num);


    let open_close_operation_times = 0; // 開閉操作回数.
    for (let i = left_start_num; i <= right_start_num; i++) {
        if (l[i] == 0) {
            open_close_operation_times++;
        } else {
            open_close_operation_times += 2;
        }
    }

    console.log(open_close_operation_times);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));