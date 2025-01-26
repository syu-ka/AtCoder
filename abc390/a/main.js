function Main(input) {
    const A = input[0].split(" ").map(Number);
    const ASource = [1, 2, 3, 4, 5];
    let canAO = false; //昇順(AscendingOrder)できるか.
    for (let i = 0; i < 4; i++) {
        let ASwap = A.slice(); //ASwapを変更してもAに影響がでないようにsliceで渡す.
        [ASwap[i], ASwap[i + 1]] = [ASwap[i + 1], ASwap[i]]; //隣り合う項を一か所だけ入れ替える.

        if (ASwap.join("") == ASource.join("")) canAO = true;
    }
    canAO ? console.log("Yes") : console.log("No");


}
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));