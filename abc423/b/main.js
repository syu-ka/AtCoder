function Main(input) {
    const n = Number(input[0]);
    const l = input[1].split(" ").map(Number);
    let intrusion_impossible_count = 0;
    for (let i = 0; i < n; i++) {
        if (l[i] == 1) {
            for (let j = i; j < n; j++) {
                if (l[j] == 1) {
                    intrusion_impossible_count = j - i;
                }
            }
            break;
        }
    }
    console.log(intrusion_impossible_count);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));