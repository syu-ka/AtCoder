function Main(input) {
    const s = input[0].split("");
    const s_toLower = s.map(c => c.toLowerCase());
    // s_toLower: sの小文字に変換したもの.
    const t = input[1].split("");
    const t_set = new Set(t); // tの文字をセットにする.重複を排除する.
    // console.log(s, t, s_toLower);

    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s_toLower[i]) {
            let prev = s[i - 1];
            if (!t_set.has(prev)) {
                console.log("No");
                return;
            }
        }
    }
    console.log("Yes");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));