function Main(input) {
    const s = input[0].split("").map(Number);
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] + 1 == s[i + 1]) {
            count++;
            for (let j = 1; 0 <= i - j, i + j < s.length; j++) {
                if (s[i - j] == s[i] && s[i + 1] == s[i + 1 + j]) {
                    count++;
                } else {
                    i += j - 1;
                    break;
                }

                // 最後のindexまでjのforが続いた場合.
                if (i + j == s.length - 1) {
                    i = s.length;
                }
            }
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));