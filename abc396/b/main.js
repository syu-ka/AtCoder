function Main(input) {
    const q = Number(input[0]);
    let query = [];
    let cardOrder = [...Array(100)].map(() => 0);
    for (let i = 1; i <= q; i++) {
        query[i] = input[i].split(" ").map(Number);
        if (query[i][0] === 1) {
            cardOrder.push(query[i][1]);
        } else if (query[i][0] === 2) {
            console.log(cardOrder[cardOrder.length - 1]);
            cardOrder.pop();
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));