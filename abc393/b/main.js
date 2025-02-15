function Main(input) {
    const S = input[0].split("");
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        for (let j = 1; j < S.length; j++) {
            for (let k = 1; k < S.length; k++) {
                if (j - i == k - j && i < j && j < k) {
                    if (S[i] == "A" && S[j] == "B" && S[k] == "C") {
                        count++;
                    }
                }
            }
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));