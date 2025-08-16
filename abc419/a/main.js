function Main(input) {
    const s = input[0];
    const atcoder = ['red', 'blue', 'green'];
    const atcoder2 = { red: 'SSS', blue: 'FFF', green: 'MMM' };

    console.log(atcoder.includes(s) ? atcoder2[s] : 'Unknown');
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));