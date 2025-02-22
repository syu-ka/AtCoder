function Main(input) {
    const s = input[0].split("");
    let countW = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "W") {
            countW++;
            if (s[i + 1] == "A") {
                s[(i + 1) - countW] = "A";
                for (let j = 0; j < countW; j++) {
                    s[(i + 1) - j] = "C";
                }
            }
        } else {
            countW = 0;
        }
    }
    console.log(s.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));