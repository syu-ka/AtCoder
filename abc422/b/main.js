function Main(input) {
    const [h, w] = input[0].split(" ").map(Number);
    let s = [];
    for (let i = 1; i <= h; i++) {
        s.push(input[i].split(""));
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (s[i][j] === "#") {
                let count = 0;
                for (let di = -1; di <= 1; di++) {
                    for (let dj = -1; dj <= 1; dj++) {
                        if (Math.abs(di) + Math.abs(dj) !== 1) continue;
                        const ni = i + di;
                        const nj = j + dj;
                        if (0 <= ni && ni < h && 0 <= nj && nj < w && s[ni][nj] === "#") {
                            count++;
                        }
                    }
                }
                if (count !== 2 && count !== 4) {
                    console.log("No");
                    return;
                }
                count = 0;
            }
        }
    }
    console.log("Yes");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));