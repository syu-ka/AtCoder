function Main(input) {
    const s = input[0].split("");
    let count = 0;
    const lengthTrue = s.length % 2 === 0 ? true : false;
    // console.log(length);
    for (let i = 0; i < s.length; i++) {
        if (((i + count) % 2 === 1 && s[i] === "o") || ((i + count) % 2 === 0 && s[i] === "i")) {
        } else {
            count++;
            // console.log(`i=${i}, count=${count}`);
        }
    }
    if (!lengthTrue) {
        count++;
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));