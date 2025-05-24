function Main(input) {
    const H_MAX = 10 ** 3;
    const W_MAX = 10 ** 3;
    const [h, w] = input[0].split(" ").map(Number);
    const s = [];
    let t = [];
    let d = [];
    for (let i = 0; i < h; i++) {
        s.push(input[i + 1].split(""));
        t.push(input[i + 1].split(""));
        d.push(input[i + 1].split(""));
    }

    const e_coord = [];
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (s[i][j] == "E") {
                e_coord.push([i, j]);
            }
            if (s[i][j] == ".") {
                d[i][j] = H_MAX * W_MAX;
            }
        }
    }
    for (let i = 0; i < e_coord.length; i++) {
        const [x, y] = e_coord[i];
        for (let j = 0; j < h; j++) {
            for (let k = 0; k < w; k++) {
                if (s[j][k] == ".") {
                    if (d[j][k] > Math.abs(x - j) + Math.abs(y - k)) {
                        d[j][k] = Math.abs(x - j) + Math.abs(y - k);
                    }
                }
            }
        }
    }
    console.log(h, w);
    console.log(s);
    console.log(t);
    console.log(e_coord);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));