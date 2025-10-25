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

    let meet_count = 0;
    let sum_meet_count = 0;
    let left = 1;
    let right = 1;
    console.log(pos_to_count[m]);
    for (let left = 1; left < m; left++) {
        for (let j = right; meet_count < c; j++) {
            meet_count = meet_count + (pos_to_count[j] || 0);
            right = j;
            console.log(j);
        }
        console.log(`---left=${left}---`);
        console.log(`meet_count=${meet_count}`);
        sum_meet_count += meet_count;
    }


    console.log(pos_to_count);
    console.log(sum_meet_count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));