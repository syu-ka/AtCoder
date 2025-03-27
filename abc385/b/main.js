function Main(input) {
    const [h, w, x, y] = input[0].split(" ").map(Number);
    const s = [];
    for (let i = 0; i < h; i++) {
        s.push(input[i + 1].split(""));
    }
    const t = input[h + 1].split("");

    const INDEX_OFFSET = 1; // 0-indexed -> 1-indexed.
    let tmpX = x - INDEX_OFFSET;
    let tmpY = y - INDEX_OFFSET;
    let passedHome = new Set();
    for (let i = 0; i < t.length; i++) {
        if (t[i] === "U") {
            if (s[tmpX - 1][tmpY] === "@") {
                tmpX--;
                passedHome.add(`${tmpX},${tmpY}`);
            } else if (s[tmpX - 1][tmpY] === ".") {
                tmpX--;
            }

        } else if (t[i] === "D") {
            if (s[tmpX + 1][tmpY] === "@") {
                tmpX++;
                passedHome.add(`${tmpX},${tmpY}`);
            } else if (s[tmpX + 1][tmpY] === ".") {
                tmpX++;
            }
        } else if (t[i] === "L") {
            if (s[tmpX][tmpY - 1] === "@") {
                tmpY--;
                passedHome.add(`${tmpX},${tmpY}`);
            }
            else if (s[tmpX][tmpY - 1] === ".") {
                tmpY--;
            }
        }
        else if (t[i] === "R") {
            if (s[tmpX][tmpY + 1] === "@") {
                tmpY++;
                passedHome.add(`${tmpX},${tmpY}`);
            }
            else if (s[tmpX][tmpY + 1] === ".") {
                tmpY++;
            }
        }

        // console.log(`t=${t[i]},${tmpX},${tmpY},${passedHome.size}`);
    }
    console.log(tmpX + INDEX_OFFSET, tmpY + INDEX_OFFSET, passedHome.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));