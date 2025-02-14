function Main(input) {

    /* 入力操作 */
    const [N, M, K, T] = input[0].split(" ").map(Number);
    // N は区画の縦・横の数で、N=50.
    // M はR国の人の数で、50≤M≤1600.
    // K は鉄道会社Xの初期資金であり、11000≤K≤20000.
    // T はゲームのターン数であり、T=800.

    // console.log(N, M, K, T);

    let i_s = []; // i行目 にある 家. indexが住人番号.
    let j_s = []; // j列目 にある 家.
    let i_t = []; // i行目 にある 職場.
    let j_t = []; // j列目 にある 職場.
    for (let i = 0; i < M; i++) {
        [i_s[i], j_s[i], i_t[i], j_t[i]] = input[i + 1].split(" ").map(Number);
        // console.log(i_s[m], j_s[m], i_t[m], j_t[m]);
    }

    /* 出力操作 */
    for (let i = 0; i < T; i++) {
        console.log(-1);
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));