function Main(input) {
    const s = Number(input[0]);
    if (200 <= s && s <= 299) {
        console.log("Success");
    } else {
        console.log("Failure");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));