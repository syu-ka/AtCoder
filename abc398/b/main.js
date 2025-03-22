function Main(input) {
    const a = input[0].split(" ").map(Number);
    let count = {};

    for (let i = 0; i < a.length; i++) {
        let elm = a[i];
        count[elm] = (count[elm] || 0) + 1;
    }

    let isX = false;    // 同じ数字のカードが三枚以上あるか.
    let isY = false;    // 同じ数字のカードが二枚あるか.
    for (elem in count) {
        // console.log(`elem:${elem}, count[elem]:${count[elem]}`);
        if (count[elem] >= 3 && !isX) {
            isX = true;
        } else if (count[elem] >= 2) {
            isY = true;
        }
    }

    if (isX && isY) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));