function Main(input) {
    const [N, Q] = input[0].split(" ").map(Number);
    let pigeon = [""]; //pigeon[1]==3は1番の鳩が3番の巣にいる.
    let nest = [""]; //nest[1]==3 は 1番の巣に鳩が3匹いる.
    for (let i = 1; i <= N; i++) {
        pigeon.push(i);
        nest.push(1);
    }
    let kind = [];
    let count = 0;
    for (let i = 0; i < Q; i++) {
        kind.push(input[i + 1].split(" ").map(Number));
        if (kind[i][0] == 1) {
            let P = kind[i][1];
            let H = kind[i][2];

            if (nest[pigeon[P]] == 2) count--;
            nest[pigeon[P]]--;

            pigeon[P] = H;

            nest[pigeon[P]]++;
            if (nest[pigeon[P]] == 2) count++;
            // console.log("あ");
        } else if (kind[i][0] == 2) {
            // console.log(`count = ${count}`);
            console.log(count);
        }
    }
    // console.log(N, Q);
    // console.log(kind);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));