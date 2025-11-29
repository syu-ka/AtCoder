function Main(input) {
    const [n, m] = input[0].split(" ").map(Number);
    // n: 鳥の羽数.
    // m: 鳥の種類数.

    let type_to_weight = {};
    let type_to_count = {};
    for (let i = 1; i <= n; i++) {
        let [a, b] = input[i].split(" ").map(Number);
        // a: 鳥の種類. b: 鳥の大きさ.

        type_to_weight[a] = type_to_weight[a] + b || b;

        type_to_count[a] = type_to_count[a] + 1 || 1;

        // console.log(type_to_weight[a]);
    }
    for (type in type_to_weight) {
        let bird_count = type_to_count[type];
        let bird_average = type_to_weight[type] / bird_count;
        console.log(bird_average);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));