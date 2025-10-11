function Main(input) {
    const s = input[0].split("");
    const median_index = Math.floor((s.length - 1) / 2);
    s.splice(median_index, 1);
    console.log(s.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));