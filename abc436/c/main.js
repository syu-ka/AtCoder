function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let block_area = new Set()
    let count = 0;
    for (let i = 1; i <= M; i++) {
        const [R, C] = input[i].split(" ").map(Number);
        if (!block_area.has(`${R},${C}`) && !block_area.has(`${R + 1},${C}`) && !block_area.has(`${R},${C + 1}`) && !block_area.has(`${R + 1},${C + 1}`)) {
            count++;
            block_area.add(`${R},${C}`);
            block_area.add(`${R + 1},${C}`);
            block_area.add(`${R},${C + 1}`);
            block_area.add(`${R + 1},${C + 1}`);
        }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));