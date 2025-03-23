function Main(input) {
    let answer = "";

    const [n, r, c] = input[0].split(" ").map(Number);
    const s = input[1].split("");

    let [sR, sC] = [[0], [0]]; // 煙の初期座標.
    for (let i = 0; i <= n; i++) {
        if (s[i] === "N") {
            sR.push(sR[sR.length - 1] - 1);
            sC.push(sC[sC.length - 1]);
        } else if (s[i] === "S") {
            sR.push(sR[sR.length - 1] + 1);
            sC.push(sC[sC.length - 1]);
        } else if (s[i] === "W") {
            sR.push(sR[sR.length - 1]);
            sC.push(sC[sC.length - 1] - 1);
        } else if (s[i] === "E") {
            sR.push(sR[sR.length - 1]);
            sC.push(sC[sC.length - 1] + 1);
        }

        if (i === 0) continue;

        let isExist = false;
        for (let j = 0; j < i; j++) {
            if (r === sR[i] - sR[j] && c === sC[i] - sC[j]) {
                answer += "1";
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            answer += "0";
        }
    }

    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));