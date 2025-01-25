function Main(input) {
    const As = input[0].split(" ");
    function sort(a, b) { return a - b; };
    const AsSort = As.toSorted(sort);
    // console.log(AsSort);

    let isSwap = false;
    for (let i = 0; i < As.length; i++) {
        if (AsSort[i] !== As[i]) {
            let temp = As[i];
            As[i] = As[i + 1];
            As[i + 1] = temp;
            isSwap = true;
            break;
        }
    }
    let isMatched = true;
    for (let i = 0; i < As.length; i++) {
        if (AsSort[i] !== As[i]) {
            isMatched = false;
        }
    }
    (isMatched && isSwap) ? console.log("Yes") : console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));