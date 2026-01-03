function Main(input) {
    let N = input[0].split("").map(Number);
    const result_set = new Set(); // 既定の操作を行った結果の数を収納. ハッピー数は既定の操作を行った結果がループしないため、ループした瞬間ハッピー数でないことが確定する.

    while (true) {
        let tmp_result = 0;
        for (let i = 0; i < N.length; i++) {
            tmp_result += N[i] ** 2;
        }
        // console.log(tmp_result);
        if (tmp_result == 1) {
            console.log("Yes");
            return;
        }
        if (result_set.has(tmp_result)) {
            console.log("No");
            return;
        } else {
            result_set.add(tmp_result);
        }
        N = String(tmp_result).split("").map(Number); // 今回の結果が次のNであるため.
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));