function Main(input) {
    let isPossible = true;
    const [H, W] = input[0].split(" ").map(Number);
    let S = [];
    let a, b, c, d;
    for (let i = 0; i < H; i++) {
        S.push(input[i + 1].split(""));
        for (let j = 0; j < W; j++) {
            if (S[i][j] === "#") {
                // console.log(S[i][j]);
                // console.log(i, j);
                if (a > i || a == undefined) a = i;
                if (b < i || b == undefined) b = i;
                if (c > j || c == undefined) c = j;
                if (d < j || d == undefined) d = j;
            }
        }
    }
    // console.log(a, b, c, d);
    for (let i = a; i <= b; i++) {
        for (let j = c; j <= d; j++) {
            if (S[i][j] === ".") isPossible = false;
        }
    }

    if (isPossible) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));