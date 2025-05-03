function Main(input) {
    const s = input[0].split("");
    let allAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // allAlphabet: 全てのアルファベットのセット.

    const set = new Set(s);
    for (let i = 0; i < allAlphabet.length; i++) {
        if (!set.has(allAlphabet[i])) {
            console.log(allAlphabet[i]);
            return
        }
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));