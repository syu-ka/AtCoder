function Main(input) {
    // 今回の問題は重複を考えないで良いため、aの登場回数=ACした問題数となる.

    const [n, m, k] = input[0].split(" ").map(Number);
    // n: 人数, m: 問題数, k: コンテスト数.


    let a_to_aCount = new Array(n).fill(0); // 各人がACした問題数を格納する配列.
    let ans = []; // 全問正解した人のインデックスを格納する配列.
    for (let i = 1; i <= k; i++) {
        const [a, b] = input[i].split(" ").map(Number);
        a_to_aCount[a - 1]++; // aさんがACした問題数をインクリメント.
        if (a_to_aCount[a - 1] == m) {
            ans.push(a); // 全問正解した人のインデックスを格納.
        }
    }
    console.log(ans.join(" ")); // 全問正解した人のインデックスを空白区切りで出力.
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));