function Main(input) {
    const As = input[0].split(" ").map(Number);
    const AsSource = [1, 2, 3, 4, 5];
    let canAO = false;
    let count = 0;
    for (let i = 0; i < 4; i++) {
        let AsSwap = As.slice(); //AsSwapを変更してもAsに影響がでないようにsliceで渡す.
        AsSwap[i] = As[i + 1];
        AsSwap[i + 1] = As[i];
        if (AsSwap.join("") == AsSource.join("")) {
            canAO = true;
            break;
        }

    }
    canAO ? console.log("Yes") : console.log("No");


}
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));