/* 煙を固定して、焚き火と高橋君のマス(R,C)を風に従って移動させる. */
// そうすることで、変化する物体の数を2つに減らすことができるため、計算量を減らすことができる.
function Main(input) {
    let answer = "";

    const [n, r, c] = input[0].split(" ").map(Number);
    const s = input[1].split("");

    let [tmpR, tmpC] = [r, c]; // 高橋君の現在の座標.
    let [bonfireR, bonfireC] = [0, 0]; // 焚き火の座標.
    let smokeRC = new Set(); // 煙の座標.
    smokeRC.add(`${bonfireR},${bonfireC}`); // 初期値を追加.
    for (let i = 0; i < n; i++) {
        if (s[i] === "N") {
            tmpR++;
            bonfireR++;
        } else if (s[i] === "S") {
            tmpR--;
            bonfireR--;
        } else if (s[i] === "W") {
            tmpC++;
            bonfireC++;
        } else if (s[i] === "E") {
            tmpC--;
            bonfireC--;
        }

        smokeRC.add(`${bonfireR},${bonfireC}`);
        // console.log(`${bonfireR},${bonfireC}|${tmpR},${tmpC}`);

        let tmpRC = `${tmpR},${tmpC}`;
        if (smokeRC.has(tmpRC)) {
            answer += "1";
        } else {
            answer += "0";
        }
    }

    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));