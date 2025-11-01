function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const s = [];
    const grid_set = new Set();
    for (let i = 1; i <= n; i++) {
        s.push(input[i].split(""));
    }
    for (let i = 0; i <= n - m; i++) {
        for (let j = 0; j <= n - m; j++) {
            let add_value = "";
            for (let k = 0; k < m; k++) {
                for (let l = 0; l < m; l++) {
                    add_value += s[i + k][j + l];
                }
            }
            // console.log(add_value);
            grid_set.add(add_value);
        }
    }
    // console.log(grid_set);
    console.log(grid_set.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));