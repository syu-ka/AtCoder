function Main(input) {
    const S = input[0];
    const Ss = input[0].split("");

    const output = Ss[0] + "UPC";
    console.log(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));