function Main(input) {
    let eatable = 0;

    const [n, m] = input[0].split(" ").map(Number);
    // n: 食材の種類数. m: 料理の種類数.

    let k = [];
    let a = new Array(m);
    for (let i = 1; i <= m; i++) {
        k.push(input[i].split(" ").map(Number)[0]);
        a[i - 1] = new Set(input[i].split(" ").map(Number).slice(1));
    }


    let b = input[m + 1].split(" ").map(Number);

    // console.log(a[0].has(b[0]));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (a[i].has(b[j])) {
                k[i]--;
                if (k[i] === 0) {
                    eatable++;
                }
            }
        }

        console.log(eatable);
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));