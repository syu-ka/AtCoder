function Main(input) {
    const n = Number(input[0]);
    let s = new Array(n);
    let t = new Array(n);
    for (let i = 0; i < n; i++) {
        const offset = 1;
        s[i] = input[i + offset].split("");
        t[i] = input[i + n + offset].split("");

    }

    let nuberOfDifferent_turn0times = 0;
    let nuberOfDifferent_turn1times = 1;
    let nuberOfDifferent_turn2times = 2;
    let nuberOfDifferent_turn3times = 3;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (s[i][j] !== t[i][j]) {
                nuberOfDifferent_turn0times++;
            }
            if (s[n - i - 1][j] !== t[j][i]) {
                nuberOfDifferent_turn1times++;
            }
            if (s[n - i - 1][n - j - 1] !== t[i][j]) {
                nuberOfDifferent_turn2times++;
            }
            if (s[i][n - j - 1] !== t[j][i]) {
                nuberOfDifferent_turn3times++;
            }
        }
    }

    console.log(Math.min(nuberOfDifferent_turn0times, nuberOfDifferent_turn1times, nuberOfDifferent_turn2times, nuberOfDifferent_turn3times));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));