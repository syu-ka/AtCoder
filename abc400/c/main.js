function Main(input) {
    let count = 0;
    const n = BigInt(input[0]);

    for (let i = 2; i <= n; i *= 2) {
        for (let j = 1; j * j * i <= n; j += 2) {
            // console.log(`j * j * i: ${j} * ${j} * ${i}= ${j * j * i}`);
            count++;
        }
    }

    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));