function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);

    let a_elem_to_count = {};
    for (let i = 0; i < n; i++) {
        let a_elem = a[i];
        a_elem_to_count[a_elem] = (a_elem_to_count[a_elem] || 0) + 1;
    }

    let combination = 0;

    for (elem1 in a_elem_to_count) {
        if (a_elem_to_count[elem1] >= 2) {
            let elem1_count = a_elem_to_count[elem1];
            let elem1_combination = elem1_count * (elem1_count - 1) / 2;

            // elem1以外の数字の個数
            let elem2_count = n - elem1_count;
            let tmp_combination = elem1_combination * elem2_count;

            combination += tmp_combination;
        }
    }


    console.log(combination);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));