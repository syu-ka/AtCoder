function Main(input) {
    const [h, w] = input[0].split(" ").map(Number);
    const n = h * w;
    let allC = calcAllC(n); // 全ての2進数の組み合わせを計算.
    let a = [];
    let binary_number = Array.from({ length: h }, () => Array(w).fill(0));
    for (let i = 1; i <= h; i++) {
        a.push(input[i].split(" ").map(Number));
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            binary_number[i][j] = a[i][j].toString(2);
        }
    }

    // 全ての2進数の組み合わせを1つずつ処理.
    for (target of allC) {
        let targetC = target.split("").map(Number);
        let sum = 0;

        // 2進数の組み合わせを1桁ずつ処理.
        for (let i = 0; i < targetC.length; i++) {

        }
    }
    console.log(h, w);
    console.log(a);
    console.log(binary_number);
}

function calcAllC(n) {
    newBox = [];
    for (let i = 0; i < (1 << n); i++) {
        newBox.push(i.toString(2).padStart(n, '0'));
    };

    return newBox;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));