function Main(input) {
    const N = Number(input[0]);
    const T = input[1].split(" ").map(Number);

    let index_to_value = {};

    for (let i = 0; i < T.length; i++) {
        let elem = T[i];
        index_to_value[elem] = i + 1; // indexが1から始まるため+1.
    }

    T.sort((a, b) => {
        return a - b;
    })
    let answer_index = [];
    for (let i = 0; i < 3; i++) {
        answer_index.push(index_to_value[T[i]]);
    }
    console.log(answer_index.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));