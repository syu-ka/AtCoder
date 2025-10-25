function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);
    let a_sum = 0;
    for (let i = 0; i < n; i++) {
        a_sum += a[i];
    }
    for (let i = 0; i < n; i++) {
        let a_sum_sub = a_sum - a[i];
        if (a_sum_sub == m) {
            console.log("Yes");
            return;
        }
    }

    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));