function Main(input) {
    const [n, a, b] = input[0].split(" ").map(Number);
    const s = input[1].split("");

    let a_count = 0;
    let b_count = 0;
    let OK_combi = 0;

    for (let left = 0, right = 0; left < n - a; left++) {
        // console.log(`left=${left}, right=${right}`);
        if (left == 0) {
            let i = 0;
            while (true) {
                if (left + i >= n) {
                    // left += i;
                    break;
                }

                if (s[left + i] === "a") {
                    a_count++;
                } else if (s[left + i] === "b") {
                    b_count++;
                }

                if (a_count >= a && b_count < b) {
                    OK_combi++;
                    right = i;
                    // console.log("あ");
                    // console.log(`left=${left}, right=${right}`);
                    // console.log(a_count, b_count);
                } else if (b_count >= b) {
                    right = i;
                    // console.log(`break: left=${left}, right=${right},${a_count},${b_count}`);
                    break;
                }
                i++;
            }
        } else {

            // b_countが規定値(b)を下回るまで繰り返す.
            let i = 0;
            while (true) {
                // console.log("left-1 + i=" + (left - 1 + i));
                if (s[left - 1 + i] === "a") {
                    a_count--;
                } else if (s[left - 1 + i] === "b") {
                    b_count--;
                }

                // console.log(`a_count=${a_count}, b_count=${b_count}`);

                if (a_count >= a && b_count < b) {
                    OK_combi++;
                    left += i;
                    // console.log("い");
                    // console.log(`left=${left}, right=${right}`);
                    // console.log(a_count, b_count);
                    break;
                } else if (b_count < b) {
                    left += i;
                    // console.log(`break: left=${left}, right=${right},${a_count},${b_count}`);
                    break;
                }
                i++;
            }


            // b_countが規定値(b)以上になるまで繰り返す.
            let k = 1;
            while (true) {
                // console.log(`k=${k}`);
                if (right + k >= n) {
                    break;
                }

                if (s[right + k] === "a") {
                    a_count++;
                } else if (s[right + k] === "b") {
                    b_count++;
                }

                if (a_count >= a && b_count < b) {
                    OK_combi++;
                    // console.log("う");
                    // console.log(`left=${left}, right=${right + k}`);
                    // console.log(a_count, b_count);
                } else if (b_count >= b) {
                    // console.log(`break: left=${left}, right=${right + k},${a_count},${b_count}`);
                    b_count--;
                    right += k - 1;
                    break;
                }
                k++;
            }
        }

    }
    console.log(OK_combi);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));