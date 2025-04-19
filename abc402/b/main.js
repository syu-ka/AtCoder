function Main(input) {
    const q = Number(input[0]);
    let queue = [];
    for (let i = 1; i <= q; i++) {
        const query = input[i].split(" ").map(Number);
        if (query[0] === 1) {
            queue.push(query[1]);
        } else if (query[0] === 2) {
            console.log(queue[0]);
            queue.shift();
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));