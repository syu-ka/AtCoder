function Main(input) {
    const x = input[0].split("").map(Number);
    let zero_count = 0;
    let zero_str = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] == 0) {
            zero_count++;
            zero_str += "0";
        }
    }
    let zero_above = x.filter((num) => num > 0);
    zero_above.sort((a, b) => a - b);
    zero_above.splice(1, 0, zero_str);
    console.log(Number(zero_above.join("")));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));