function Main(input) {
    const n = Number(input[0]);
    let r_min;
    let r_max;
    let c_min;
    let c_max;
    for (let i = 1; i <= n; i++) {
        const [r, c] = input[i].split(" ").map(Number);
        r_min = r_min === undefined ? r : Math.min(r_min, r);
        r_max = r_max === undefined ? r : Math.max(r_max, r);
        c_min = c_min === undefined ? c : Math.min(c_min, c);
        c_max = c_max === undefined ? c : Math.max(c_max, c);
    }
    const semiInterquartileRange_r = Math.ceil((r_max - r_min) / 2);
    const semiInterquartileRange_c = Math.ceil((c_max - c_min) / 2);
    console.log(Math.max(semiInterquartileRange_r, semiInterquartileRange_c));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));