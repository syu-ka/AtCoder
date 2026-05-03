"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;

    // DPテーブルを作成
    const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    // 初期化
    for (let i = 0; i <= len1; i++) dp[i][0] = i;
    for (let j = 0; j <= len2; j++) dp[0][j] = j;

    // DPテーブルを埋める
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // 文字が一致する場合
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // 削除
                    dp[i][j - 1] + 1, // 挿入
                );
            }
        }
    }

    // 最終的な編集距離を返す
    return dp[len1][len2];
}

function isEqual(object_A, object_B) {
    /**
     * プロパティの型が一致するかどうかを確認
     * @param {*} valueA
     * @param {*} valueB
     * @returns {boolean}
     */

    // オブジェクトのすべてのプロパティキーを取得
    const keysA = Reflect.ownKeys(object_A);
    const keysB = Reflect.ownKeys(object_B);

    // 「同じ」オブジェクトならプロパティ数は一致する
    if (keysA.length !== keysB.length) {
        // console.log("プロパティ数が一致していません")
        return false;
    }

    // 「同じ」オブジェクトであると仮定してループする
    for (const key of keysA) {
        // 同じキーのプロパティは中身が一致するはずだ
        if (object_A[key] !== object_B[key]) {
            return false;
        }
    }

    // すべてのプロパティについて検査が終わったなら等しい
    return true;
}

function impossibleStr(S, T) {
    let count_str1 = {};
    for (let i = 0; i < S.length; i++) {
        let elem = S[i];
        if (elem != "A") {
            count_str1[elem] = (count_str1[elem] || 0) + 1;
        }
    }

    let count_str2 = {};
    for (let i = 0; i < T.length; i++) {
        let elem = T[i];
        if (elem != "A") {
            count_str2[elem] = (count_str2[elem] || 0) + 1;
        }
    }

    // console.log(count_str1);
    // console.log(count_str2);

    let isPossible = isEqual(count_str1, count_str2);

    // console.log(isPossible);
    return isPossible;
}

function Main(input) {
    let line = 0;
    const S = input[line++].split("");
    const T = input[line++].split("");

    // 比較する文字列.
    const str1 = S.join("");
    const str2 = T.join("");

    if (!impossibleStr(S, T)) {
        console.log(-1);
        return 0;
    }

    let A_count = 0;
    let str1_A_count_arr = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] == "A") {
            A_count++;
        } else {
            str1_A_count_arr.push(A_count);
            A_count = 0;
        }
    }

    A_count = 0;
    let str2_A_count_arr = [];
    for (let i = 0; i < T.length; i++) {
        if (T[i] == "A") {
            A_count++;
        } else {
            str2_A_count_arr.push(A_count);
            A_count = 0;
        }
    }

    console.log(str1_A_count_arr, str2_A_count_arr);

    let count_len = Math.max(str1_A_count_arr.length, str2_A_count_arr.length);
    let count_distance = 0;
    for (let i = 0; i < count_len; i++) {
        count_distance += Math.abs(str1_A_count_arr[i] - str2_A_count_arr[i]);
    }

    // const distance = levenshteinDistance(str1, str2);

    // console.log(distance);
    console.log(count_distance);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));