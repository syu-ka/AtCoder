function Main(input) {
    const n = Number(input[0]);
    const robot = [{}];
    for (let i = 0; i < n; i++) {
        const w = input[i + 1].split(" ").map(Number)[0];
        const h = input[i + 1].split(" ").map(Number)[1];
        const b = input[i + 1].split(" ").map(Number)[2];
        robot[i] = { weight: w, head: h, body: b };
    }
    console.log(robot);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));