function Main(input) {
    const [n, k] = input[0].split(" ").map(Number);
    const s = input[1].split("");

    let word_to_appearanceCount = {};
    for (let i = 0; i < n - (k - 1); i++) {
        let tmp_word = "";
        for (let j = i; j < i + k; j++) {
            tmp_word += s[j];
        }
        // console.log(tmp_word);
        word_to_appearanceCount[tmp_word] = (word_to_appearanceCount[tmp_word] || 0) + 1;
    }
    const max_appearanceCount = Math.max(...Object.values(word_to_appearanceCount));
    console.log(max_appearanceCount);

    const max_appearanceCount_word = Object.keys(word_to_appearanceCount).filter((key) => {
        return word_to_appearanceCount[key] === max_appearanceCount
    });
    max_appearanceCount_word.sort();
    console.log(max_appearanceCount_word.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));