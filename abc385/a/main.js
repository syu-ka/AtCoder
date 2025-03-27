function Main(input) {
    const a = input[0].split(" ").map(Number);
    let aSort = a.sort((a, b) => a - b);
    // 全て等しい、又は、最大値とその他の和が等しいときYes.
    if (aSort[0] === aSort[2] || aSort[0] + aSort[1] === aSort[2]) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));