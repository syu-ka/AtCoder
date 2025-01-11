function Main(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    // console.log(A);

    let count = 0;

    let key;
    let searchLeft = 0;
    let searchRight = A.length - 1;
    let half;

    for (let i = 0; i < N; i++) {
        key = A[i] * 2;
        // console.log("--------------");
        // console.log(`key=${key}`);
        if (key > A[A.length - 1]) {
            break;
        }
        searchLeft = 0;
        searchRight = A.length - 1;

        // console.log(searchLeft, searchRight, key, half);

        // 2文探索法で探す.
        while (searchLeft < searchRight) {
            half = Math.floor((searchRight + searchLeft) / 2);
            // console.log(`half=${half}`);
            // console.log(A[half]);
            // console.log(`searchRight= ${searchRight}, searchLeft= ${searchLeft}`);
            // console.log(`half= ${half}`);

            if (key <= A[half]) {
                searchRight = half;
                // console.log(`searchRight= ${searchRight}`);
            } else if (key > A[half]) {
                searchLeft = half + 1;
                // console.log(`searchLeft= ${searchLeft}`);
            }
        }
        // console.log(`count += ${A.length - searchLeft}`);
        count += A.length - searchLeft;
    }
    console.log(count);
    // console.log(`count=${count}`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));