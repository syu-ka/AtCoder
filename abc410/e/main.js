function Main(input) {
    const [n, h, m] = input[0].split(" ").map(Number);
    // n: モンスターの数, h: 高橋君の体力, m: 高橋君の魔力
    let a = []; // a[i]:i番目のモンスターを高橋君の体力をa[i]削ることで倒すことができる
    let b = []; // b[i]:i番目のモンスターを高橋君の魔力をb[i]削ることで倒すことができる
    for (let i = 1; i <= n; i++) {
        a.push(input[i].split(" ").map(Number)[0]);
        b.push(input[i].split(" ").map(Number)[1]);
    }
    const a_and_index = Array.from({ length: n }, (_, i) => ({ value: a[i], index: i }));
    const b_and_index = Array.from({ length: n }, (_, i) => ({ value: b[i], index: i }));
    let a_sorted = a_and_index.sort((x, y) => x.value - y.value);
    let b_sorted = b_and_index.sort((x, y) => x.value - y.value);
    console.log(a_sorted, b_sorted);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));