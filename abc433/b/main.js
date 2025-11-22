function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (max <= a[i]) { // maxが更新されたとき
            max = a[i];
            // 現在が最高値=現在より左にもっと背が高い人がいないため.
            console.log(-1);
            continue;
        }

        for (let j = i; j >= 0; j--) {
            if (a[j] > a[i]) {
                console.log(j + 1);
                break;
            }
        }

    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));