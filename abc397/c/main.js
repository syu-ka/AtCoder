function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);

    let firstHalfSet = new Set();
    let firstHalfSet_size = [];

    let secondHalfSet = new Set();
    let secondHalfSet_size = [];


    for (let i = 0; i < n; i++) {

        //前からi番目までの要素を集合に追加.
        firstHalfSet.add(a[i]);
        firstHalfSet_size[i] = firstHalfSet.size;

        //後ろからi番目までの要素を集合に追加.
        secondHalfSet.add(a[n - 1 - i]);
        secondHalfSet_size[n - 1 - i] = secondHalfSet.size;

    }

    let answer = 0;
    for (let i = 0; i < n - 1; i++) {
        //前半と後半の集合の要素数を比較し、最大値を取る.
        answer = Math.max(answer, firstHalfSet_size[i] + secondHalfSet_size[i + 1]);
    }
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));