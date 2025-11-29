function Main(input) {
    const [w, b] = input[0].split(" ").map(Number);
    let fusen;
    if ((w * 1000) % b == 0) {
        fusen = Math.ceil(w * 1000 / b) + 1;
    } else {
        fusen = Math.ceil(w * 1000 / b);
    }
    console.log(fusen);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));