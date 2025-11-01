/* 方針: 尺取り法を用いる */
function Main(input) {
    const [n, m, c] = input[0].split(" ").map(Number);
    // n: 人数, m: 池の長さ, c: 高橋君が止まるタイミング.

    const a = input[1].split(" ");

    // どの地点に何人いるか.
    let pos_to_count = {};
    for (let i = 0; i < n; i++) {
        pos_to_count[a[i]] = (pos_to_count[a[i]] || 0) + 1;
    }

    let pos_to_count_arr = []; // pos_to_countのkeyを格納する配列.
    for (pos in pos_to_count) {
        if (pos == 0) {
            continue;
        }
        pos_to_count_arr.push(pos_to_count[pos]);
    }
    if (pos_to_count[0]) {
        pos_to_count_arr.push(pos_to_count[0]);
    }
    // console.log(`pos_to_count_arr=${pos_to_count_arr}`);

    let meet_count = 0;
    let sum_meet_count = 0;
    let left = 0;
    let right = 0;
    for (left = 0; left < pos_to_count_arr.length; left++) {
        // console.log(`---left=${left}---`);
        // if (left == 0) {
        for (let j = right; meet_count < c; j++) {
            let index = j % pos_to_count_arr.length;
            meet_count += pos_to_count_arr[index];
            right = index + 1;
            // console.log(index);

        }
        sum_meet_count += meet_count;
        // console.log(`meet_count=${meet_count}`);
        for (let j = 0; meet_count >= c; j++) {
            meet_count -= pos_to_count_arr[left];
            left += j;
        }
        // console.log(`meet_count=${meet_count}`);


        // console.log(`sum_meet_count=${sum_meet_count}`);
    }

    let result = sum_meet_count * (1 + m - pos_to_count_arr.length);
    // console.log(pos_to_count);
    // console.log(sum_meet_count);
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));