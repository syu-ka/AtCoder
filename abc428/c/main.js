function Main(input) {
    const q = Number(input[0]);
    let type = [];
    let b = [];
    let stack = [];
    let shift_continue_count = 0;
    for (let i = 1; i <= q; i++) {
        type.push(input[i].split(" ")[0]);
        if (input[i].split(" ")[1]) {
            b.push(input[i].split(" ")[1]);
        }

        // console.log(`----i=${i}----`);

        if (type[type.length - 1] == "1") {
            if (b[b.length - 1] === "(") {
                stack.unshift("(");
            } else if (b[b.length - 1] === ")") {
                if (stack.length === 0) {
                    shift_continue_count = 0;
                } else {
                    shift_continue_count++;
                    stack.shift();
                }
            }
        } else {
            let b_pop = b.pop();
            if (b_pop === "(") {
                stack.pop();
            } else if (b_pop === ")") {
                if (shift_continue_count > 0) {
                    stack.unshift("(");
                    shift_continue_count--;
                }
            }
        }
        // console.log(b);
        if (stack.length == 0) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));