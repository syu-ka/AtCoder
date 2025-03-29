function Main(input) {
    const n = Number(input[0]);
    const p = input[1].split(" ").map(Number);

    const p_and_index = new Array(n);
    for (let i = 0; i < n; i++) {
        p_and_index[i] = { index: i, value: p[i] };
    }


    const p_and_index_sorted = [...p_and_index].sort((a, b) => b.value - a.value);
    // p_sorted: pを逆順ソートした配列.

    let rank = 1;
    for (let i = 0; i < n; i++) {
        if (p_and_index_sorted[i].value !== p_and_index_sorted[i - 1]?.value) {
            rank = i + 1;
        }
        p_and_index_sorted[i].rank = rank;
    }

    // console.log(p_and_index);
    // console.log(p_and_index_sorted);

    for (let i = 0; i < n; i++) {
        console.log(p_and_index[i].rank);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));