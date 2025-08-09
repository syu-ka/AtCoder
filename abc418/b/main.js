function Main(input) {
    let filling_rate = 0;
    const s = input[0].split("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "t" && i + 2 < s.length) {
            let tmp_t_count = 1;
            let tmp_partial_string_count = 1;
            for (let j = i + 1; j < s.length; j++) {
                tmp_partial_string_count++;
                if (s[j] === "t" && tmp_partial_string_count >= 3) {
                    tmp_t_count++;
                    filling_rate = Math.max(filling_rate, (tmp_t_count - 2) / (tmp_partial_string_count - 2));
                } else if (s[j] === "t") {
                    tmp_t_count++;
                }
            }
        }
    }
    console.log(filling_rate);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));