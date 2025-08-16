function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const s = input[1].split("");
    const t = input[2].split("");
    // let index_to_appearanceTime = {}; // インデックスと出現回数のマッピング

    for (let i = 0; i < m; i++) {
        const [l, r] = input[3 + i].split(" ").map(Number);
        // console.log("-----");
        // console.log(`l=${l}, r=${r}`);

        let subStr_s = s.slice(l - 1, r);
        let subStr_t = t.slice(l - 1, r);
        // console.log(subStr_s, subStr_t);
        s.splice(l - 1, subStr_t.length, ...subStr_t);
        t.splice(l - 1, subStr_s.length, ...subStr_s);
        // console.log(s.join(""), t.join(""));

    }
    console.log(s.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));