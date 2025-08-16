function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const s = input[1].split("");
    const t = input[2].split("");
    let index_to_appearanceTime = {}; // インデックスと出現回数のマッピング

    for (let i = 0; i < m; i++) {
        const [l, r] = input[3 + i].split(" ").map(Number);
        // console.log("-----");
        // console.log(`l=${l}, r=${r}`);

        for (let j = l - 1; j < r; j++) {
            index_to_appearanceTime[j] = (index_to_appearanceTime[j] || 0) + 1;
            // console.log(`index_to_appearanceTime[${j}] = ${index_to_appearanceTime[j]}`);
        }
    }

    for (let i = 0; i < n; i++) {
        if (index_to_appearanceTime[i] % 2 === 1) {
            let tmpStr = s[i];
            s[i] = t[i];
            t[i] = tmpStr;
        }
    }

    console.log(s.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));