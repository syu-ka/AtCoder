function Main(input) {
    const [a, b] = input[0].split(" ").map(Number);
    const divide = a / b;
    const divide_floor = Math.floor(divide);
    const divide_ceil = Math.ceil(divide);
    const answer = (divide - divide_floor) < (divide_ceil - divide) ? divide_floor : divide_ceil;
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));