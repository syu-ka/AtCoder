function Main(input) {
    const n = Number(input[0]);
    const d = input[1].split(" ").map(Number);
    for (let i = 0; i < n - 1; i++) {
        let output = [];
        let tmp_sum = 0;
        for (let j = i; j < n - 1; j++) {
            tmp_sum += d[j];
            output.push(tmp_sum);
        }
        console.log(output.join(" "));
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));