function Main(input) {
    let count = 0;
    // let set = new Set();
    const n = BigInt(input[0]);

    for (let i = 2; i <= n; i *= 2) {
        for (let j = 1; j * j * i <= n; j += 2) {
            // if (set.has(j * j * i)) {
            //     console.log(`j * j * i: ${j} * ${j} * ${i}= ${j * j * i}`);
            // }
            // console.log(`j * j * i: ${j} * ${j} * ${i}= ${j * j * i}`);
            count++;
            // set.add(j * j * i);
        }
    }

    console.log(count);
    // console.log(set);
    // console.log(set.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));