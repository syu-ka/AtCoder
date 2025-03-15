function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);

    let count = {};
    let split_index = n - 1;

    for (let i = 0; i < n; i++) {
        let elm = a[i];
        let curt_index = i;

        // 過去にelmが出てきたことがある.
        if (count[elm]) {
            if (count[elm] === 1) {
                split_index = curt_index;
            }

            // 最新のcountを設定.
            count[elm] = (count[elm] || 0) + 1;

        } else {
            //初めて出てきた数字elmのcountを設定.
            count[elm] = (count[elm] || 0) + 1;
        }
    }

    // console.log("split_index=" + split_index);
    const firstHalfSet = new Set(a.slice(0, split_index));
    // console.log(firstHalfSet);
    const secondHalfSet = new Set(a.slice(split_index));
    // console.log(secondHalfSet);
    console.log(firstHalfSet.size + secondHalfSet.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));