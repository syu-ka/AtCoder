function Main(input) {
    const s = input[0].split("").map(Number);
    let count1 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 1) count1++;
    }
    console.log(count1);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));