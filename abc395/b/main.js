function Main(input) {
    const n = Number(input[0]);
    let s = [];

    for (let i = 0; i < n; i++) {
        s.push([...Array(n)]);
    }

    let j;
    for (let i = 1; i <= n; i++) {
        j = n + 1 - i;
        if (i <= j) {
            if (i % 2 == 1) {
                let color = "#";
                color_judge(color, s, i, j);
            } else {
                let color = ".";
                color_judge(color, s, i, j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        console.log(s[i].join(""));
    }
}

function color_judge(color, s, i, j) {
    for (let a = i; a <= j; a++) {
        // "-1"が美しくないので後で書き直す.
        s[i - 1][a - 1] = color;
        s[a - 1][i - 1] = color;
        s[a - 1][j - 1] = color;
        s[j - 1][a - 1] = color;
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));