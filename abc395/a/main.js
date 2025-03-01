function Main(input) {
    const n = Number(input[0]);
    const a = input[1].split(" ").map(Number);

    let answer = "Yes";

    // let a_sort = a.slice().sort((a, b) => {
    //     return a - b;
    // });

    let prev = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] <= prev) answer = "No";
        // if (a[i] > preva[i] != a_sort[i]) answer = "No";
        prev = a[i];
    }
    // console.log(a);
    // console.log(a_sort);
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));