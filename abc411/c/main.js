function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    // n: マスの数. q: クエリの数.
    const a = input[1].split(" ").map(Number);
    // a[i]: i番目のマスを反転させる.

    let tmp_array = Array.from({ length: n }, (_, i) => 0); //マスの状態.0:白, 1:黒.
    let tmp_count = 0; // 黒く塗られたマスが連続している区間の個数.
    for (let i = 0; i < a.length; i++) {
        if (tmp_array[a[i] - 1] === 0) {
            tmp_array[a[i] - 1] = 1;    // 黒にする.

            if (n === 1) {
                console.log(1);
                continue;
            }

            if (a[i] === 1) { //a[i]が先頭の場合.
                if (tmp_array[a[i]] === 0) tmp_count++;
            } else if (a[i] === n) {   //a[i]が最後の場合.
                if (tmp_array[a[i] - 2] === 0) tmp_count++;
            } else {
                if (tmp_array[a[i] - 2] === 1 && tmp_array[a[i]] === 1) tmp_count--;
                if (tmp_array[a[i] - 2] === 0 && tmp_array[a[i]] === 0) tmp_count++;
            }
        } else {
            tmp_array[a[i] - 1] = 0;    //白にする.

            if (n === 1) {
                console.log(0);
                continue;
            }

            if (a[i] === 1) { //a[i]が先頭の場合.
                if (tmp_array[a[i]] === 0) tmp_count--;
            } else if (a[i] === n) {   //a[i]が最後の場合.
                if (tmp_array[a[i] - 2] === 0) tmp_count--;
            } else {
                if (tmp_array[a[i] - 2] === 1 && tmp_array[a[i]] === 1) tmp_count++;
                if (tmp_array[a[i] - 2] === 0 && tmp_array[a[i]] === 0) tmp_count--;
            }
        }
        console.log(tmp_count);
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));