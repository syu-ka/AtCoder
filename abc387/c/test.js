function Main(input) {
    const [L, R] = input[0].split(" ").map(Number);
    const Ls = String(L).split("").map(Number);
    const Rs = String(R).split("").map(Number);

    let count = 0;


    for (let i = L; i <= R; i++) {
        let is = String(i).split("").map(Number);
        let isShift = is.shift();
        if (isShift > Math.max(...is)) {
            count++;
        }
    }

    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));