function Main(input) {
    const n = Number(input[0]);

    let a = [1];
    for (let i = 1; i < n; i++) {
        let prev_a = a[i - 1];
        // console.log(`prev_a=`, prev_a);
        let each_digits = String(prev_a).split("").map(Number);
        let each_digits_sum = each_digits.reduce((sum, current) => sum + current, 0);
        // console.log(`each_digits=`, each_digits);
        // console.log(`each_digits_sum=`, each_digits_sum);
        a.push(prev_a + each_digits_sum);
    }
    console.log(a[n - 1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));