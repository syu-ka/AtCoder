function Main(input) {
    const q = Number(input[0]);
    let bag = []; // 袋に入っている数を保持する配列.
    for (let i = 1; i <= q; i++) {
        const [type, num] = input[i].split(" ").map(Number);

        if (type === 1) {
            bag.push(num);
            bag.sort((a, b) => a - b); // 挿入後にソート.

        } else if (type === 2) {
            console.log(bag.shift() || -1); // 袋から取り出す. 袋が空なら-1を出力.

        } else {
            console.log("Unknown");
        }
        // console.log(`bag=[${bag.join(", ")}]`); // 現在の袋の状態を出力.
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));