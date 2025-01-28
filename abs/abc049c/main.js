function Main(input) {
    let isPossible = true;
    const s = input[0].split("");
    const sR = s.reverse();
    const kind = ["dream", "dreamer", "erase", "eraser"];
    const kindR = [["m", "a", "e", "r", "d"], ["r", "e", "m", "a", "e", "r", "d"], ["e", "s", "a", "r", "e"], ["r", "e", "s", "a", "r", "e"]];
    let flag = false;
    for (let i = 0; i < sR.length; i++) {
        for (let k = 0; k < 4; k++) {
            if (sR[i] == kindR[k][0] && sR[i + 2] == kindR[k][2]) {
                flag = true;
                for (let j = 1; j < kindR[k].length; j++) {
                    if (sR[i + j] != kindR[k][j]) {
                        isPossible = false;
                    }
                }
                i += kindR[k].length - 1;
            }
        }
        if (!flag) isPossible = false;
        flag = false;
        if (!isPossible) break;
    }

    if (isPossible) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));