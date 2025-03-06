function Main(input) {
    const n = Number(input[0]);
    let s = [""];//グリットを表す文字列.sは1行目から始まるためs[0]="".

    for (let i = 1; i <= n; i++) {
        s.push(["", ...Array(n)]); //sは1列目から始まるためs[i][0]="".
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

    for (let i = 1; i <= n; i++) {
        console.log(s[i].join(""));
    }
}

function color_judge(color, s, i, j) {
    for (let a = i; a <= j; a++) {
        s[i][a] = color;
        s[a][i] = color;
        s[a][j] = color;
        s[j][a] = color;
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));