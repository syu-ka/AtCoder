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

    let distance_st = []; // distance[c]は人cの 家sと職場t の最短距離(最短マス数).
    for (let i = 0; i < M; i++) {
        [i_s[i], j_s[i], i_t[i], j_t[i]] = input[i + 1].split(" ").map(Number);
        // console.log(i_s[m], j_s[m], i_t[m], j_t[m]);

        distance_st.push(distance(i_s[i], i_t[i]) + distance(j_s[i], j_t[i]));
        // console.log(distance_st[i]);


    }

    let dist_st_desc = getOriginalIndices(distance_st); // dist_st_desc[2]はdistanceの要素を昇順に並べて2番目に大きい要素の番号.//作成理由：distanceが大きいと収益(鉄道利用料金)も大きくなるため.
    // console.log(`dist_st_desc[2].index=${dist_st_desc[2].index}`);
    console.log(`dist_st_desc[0]=${dist_st_desc[0]}`);
    console.log(`distance_st[${dist_st_desc[0]}]=${distance_st[dist_st_desc[0]]}`);
    console.log(dist_st_desc);


    /* 出力操作 */
    let inConstruction = false;
    for (let i = 0; i < T; i++) {
        if (i == 0) { //【注意】後でもう既に駅が置かれてしまっていないかなどのチェックを入れる.
            //【注意】距離が長いため一つ目の線路を繋げる前に資金が尽きてしまう可能性を考える.
            inConstruction = true;
            console.log(0, i_s[dist_st_desc[0]], j_s[dist_st_desc[0]]);//【注意】後で要素数が0以外の場合も考える.その時に存在しない要素にアクセスしないように気を付ける.
            i++;
            console.log(0, i_t[dist_st_desc[0]], j_t[dist_st_desc[0]]);//【注意】後で要素数が0以外の場合も考える.その時に存在しない要素にアクセスしないように気を付ける.
            // i++;

            inConstruction = false;
        } else {
            console.log(-1);
        }

    }
}

// dist_st_desc や 通勤で利用するか駅まで(distance()<=2)の条件の確認 で使用するために作製.
function distance(i, j) {
    return Math.abs(i - j);
}

function getOriginalIndices(before) {
    // 配列 a を複製し、それぞれの要素に元のインデックスを追加.
    let indexedArray = before.map((value, index) => ({ value, index }));

    // 値に基づいて配列を降順にソート.
    indexedArray.sort((a, b) => b.value - a.value);

    // ソート後の配列から元のインデックスだけを抽出.
    let after = indexedArray.map((object) => object.index);

    return after;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));