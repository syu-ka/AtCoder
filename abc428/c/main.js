function Main(input) {
    const q = Number(input[0]);
    let type = [];
    let b = [];
    let stack = [0];
    let stack_prefixSum = [0];
    let isNice = false;
    for (let i = 1; i <= q; i++) {
        type.push(input[i].split(" ")[0]);
        if (input[i].split(" ")[1]) {
            b.push(input[i].split(" ")[1]);
        }

        let current_length = stack.length;

        // console.log(`----i=${i}----`);

        if (type[type.length - 1] == "1") {
            stack.push(stack[current_length - 1]);
            if (b[b.length - 1] === "(") {
                stack[current_length]++;
                isNice = false;
            } else if (b[b.length - 1] === ")") {
                stack[current_length]--;
            }
            stack_prefixSum.push(Math.min(stack_prefixSum[current_length - 1], stack[current_length]));
        } else {
            let b_pop = b.pop();
            stack.pop();
            stack_prefixSum.pop();
        }

        // console.log(`stack=${stack}`);
        // console.log(`stack_prefixSum=${stack_prefixSum}`)
        if (stack[stack.length - 1] == 0 && stack_prefixSum[stack_prefixSum.length - 1] == 0) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));