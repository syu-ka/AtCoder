function Main(input) {
    const [a, b, c, d] = input[0].split(" ").map(Number);
    if (a <= c) {
        if (b <= d) {
            console.log("No");
        } else {
            console.log("Yes");
        }
    } else {
        console.log("No");
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));