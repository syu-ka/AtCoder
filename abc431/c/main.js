function Main(input) {
    let combi_count = 0;
    const [n, m, k] = input[0].split(" ").map(Number);
    const h = input[1].split(" ").map(Number);
    const b = input[2].split(" ").map(Number);

    const h_sort = [...h].sort((v1, v2) => v1 - v2);
    const b_sort = [...b].sort((v1, v2) => v1 - v2);

    for (let i = 0, tmp_b_index = 0; i < n; i++) {
        for (let j = tmp_b_index; j < m; j++) {
            if (h_sort[i] <= b_sort[tmp_b_index]) {
                combi_count++;
                tmp_b_index++;
                break;
                // console.log(`i=${i}のときcombi発生`);
            } else {
                tmp_b_index++;
                continue;
            }
        }

        if (combi_count >= k) {
            console.log("Yes");
            return;
        }
    }

    console.log("No");

    // console.log(h_sort);
    // console.log(b_sort);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));