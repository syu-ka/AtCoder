function Main(input) {
    const n = Number(input[0]);
    let skills = [];
    let acquired = new Set();
    for (let i = 1; i <= n; i++) {
        const [a, b] = input[i].split(" ").map(Number);
        skills.push({ index: i, elem1: a, elem2: b, isAcquired: false });

        if (a == 0 && b == 0) {
            acquired.add(i);
            skills[i - 1].isAcquired = true;
        }
    }
    for (let i = 0; i < n; i++) {
    }

    console.log(elems_to_index);
    console.log(acquired.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));