function Main(input) {
    let answer = -1;
    let maxNUM = -1;

    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);

    let count = {};
    let index = {};

    for (let i = 0; i < a.length; i++) {
        let elm = a[i];
        count[elm] = (count[elm] || 0) + 1;
        index[elm] = i + 1;
    }

    for (elem in count) {
        // console.log(`elem:${elem}, count[elem]:${count[elem]}`);
        if (count[elem] === 1 && Number(elem) > maxNUM) {
            maxNUM = Math.max(maxNUM, Number(elem));
            answer = index[elem];
        }
    }

    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));