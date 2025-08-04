function Main(input) {
    // 整数の２つの組(i,j)(1<=i<j<=n)のうち、j-i=A_i+A_jを満たすものの個数を求める問題
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    const idxVal = Array.from({ length: n }, (_, i) => ({ index: i + 1, value: a[i] }));
    // indexは1から始まるため、i + 1を使用
    const sortedIdxVal = [...idxVal].sort((x, y) => x.value - y.value);
    // console.log(idxVal);
    // console.log(sortedIdxVal);

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (sortedIdxVal[i].value * 2 >= n) {
            break; // j-iは必ずnより小さいためsortedIdxVal[i].value + sortedIdxVal[j].valueがn以上の場合は終了.
            // sortedIdxVal[i].value <= sortedIdxVal[j].valueのためsortedIdxVal[i].value * 2 >= nの場合は終了.
        }
        for (let j = i + 1; j < n; j++) {
            const addedValue = sortedIdxVal[i].value + sortedIdxVal[j].value;
            if (addedValue >= n) {
                break; // nを超える場合は終了.
            }
            const diffIndex = sortedIdxVal[i].index - sortedIdxVal[j].index;
            if (((diffIndex < 0) ? -diffIndex : diffIndex) === addedValue) {
                count++;
            }
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));