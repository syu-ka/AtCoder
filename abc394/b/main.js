function Main(input) {
    const n = Number(input[0]);
    const s = [];
    let sLength = [];
    let answer = new Array(50);
    for (let i = 0; i < n; i++) {
        s.push(input[i + 1].split(""));
        sLength.push(s[i].length);
        // console.log(s[i]);
        answer[sLength[i] - 1] = s[i].join("");
    }

    // let sSort = sLength.slice();
    // sSort.sort(compareFn);

    // for(let i = 0; i < n; i++){
    //     if(sSort[i])
    // }

    // console.log(sSort);
    // console.log(sLength);
    // console.log(s[0]);
    // console.log(answer);
    console.log(answer.join(""));
}
function compareFn(a, b) {
    return a - b;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));