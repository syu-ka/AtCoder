function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);
    a.sort((x, y) => x - y);
    const a_max = a[a.length - 1];
    console.log(n, q, a, a_max);
    let count = {};
    count[1] = 1; // 初期値として1を設定
    let tmp_count = 0;
    for (let i = 1; i <= a_max; i++) {
        // if ()
    }
    for (let i = 0; i < n; i++) {
        tmp_count += a[i];
        count[a[i] + 1] = tmp_count + a[i];
        // if (a[i] !== a[i - 1] || i === 0) {
        //     tmp_continuous_count = 1;
        //     count[a[i]] = tmp_count;
        // } else {
        //     tmp_continuous_count++;
        //     count[a[i]] = tmp_count - tmp_continuous_count;
        // }
    }
    console.log(count);
    for (let i = a_max; i >= 0; i--) {
        if (count[i] === undefined) {
            count[i] = count[i + 1] - 1;
        }
    }
    console.log(`count[1]=${count[1]}`);
    console.log(`count[2]=${count[2]}`);
    console.log(`count[3]=${count[3]}`);
    console.log(`count[4]=${count[4]}`);
    console.log(`count[5]=${count[5]}`);
    console.log(`count[6]=${count[6]}`);
    console.log(`count[7]=${count[7]}`);
    console.log(`count[8]=${count[8]}`);
    console.log(`count[9]=${count[9]}`);
    console.log(`count[10]=${count[10]}`);
    console.log("---answer---");
    for (let i = 0; i < q; i++) {
        const b = Number(input[i + 2]);
        console.log(`b=${b}`);
        if (b <= a_max) {
            console.log(count[b]);
        } else {
            console.log(-1);
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));