function Main(input) {
    const N = Number(input[0]); // N個の餅.
    const A = input[1].split(" ").map(Number); // A_i: i番目の餅の大きさ.A_i<=A_{i+1}.

    let count = 0; // 何種類の鏡餅が作れるかカウント.

    // 2分探索法のための変数.
    let key; // 下の餅になり得る最小値. つまり 上の餅の２倍の重さ.
    let left = 0;
    let right = A.length - 1;
    let half;

    for (let i = 0; i < N; i++) { //上の餅の重さがA[i].
        key = A[i] * 2;

        // 下の餅になり得る餅が１つもない.
        if (key > A[A.length - 1]) {
            // i++なったときにkeyが現在より小さくなることがないのでcontinueではなくbreak.
            break;
        }

        left = 0;
        right = A.length - 1;

        // 2文探索法で探す.
        while (left < right) {
            half = Math.floor((right + left) / 2);

            if (key <= A[half]) {
                right = half;
            } else if (key > A[half]) {
                left = half + 1;
            }
        }

        // A[left]以降の餅は鏡餅になり得るためカウント.
        count += A.length - left;
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));