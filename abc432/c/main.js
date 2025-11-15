/* 方針：鶴亀算 */
// 鶴の匹数:小さな飴の個数. 鶴の足の数:x小さな飴の重量.
// 亀の匹数:大きな飴の個数. 亀の足の数:y大きな飴の重量.
function Main(input) {
    const [n, x, y] = input[0].split(" ").map(Number);
    // n: 子供の数, x: 小さな飴の重量, y: 大きな飴の重量.
    const a = input[1].split(" ").map(Number);

    let weight = 小さな飴の重量 * 小さな飴の個数 + 大きな飴の重量 * 大きな飴の個数

    for (let i = 0; i < n; i++) {
        weight = (a[i] - (weight - (a[i] * x)) / (y - x)) * x + (weight - a[i] * x) / (y - x) * y;
        最大((weight - a[i] * x) / (y - x))

    }
    console.log(test1);
    console.log(test2);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));