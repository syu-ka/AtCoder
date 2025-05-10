function Main(input) {
    const [r, x] = input[0].split(" ").map(Number);
    const DIV1_MIN = 1600;
    const DIV1_MAX = 2999;
    const DIV2_MIN = 1200;
    const DIV2_MAX = 2399;
    if (x == 1) {
        if (r >= DIV1_MIN && r <= DIV1_MAX) {
            console.log("Yes");
            return;
        }
    } else if (x == 2) {
        if (r >= DIV2_MIN && r <= DIV2_MAX) {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));