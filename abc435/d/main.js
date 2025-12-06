function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let point_to_reachable = {};
    for (let i = 1; i <= M; i++) {
        let [X, Y] = input[i].split(" ").map(Number);
        point_to_reachable[X] = (point_to_reachable[X] || []);
        point_to_reachable[X].push(Y);
    }
    // console.log(point_to_reachable);

    for (root_point in point_to_reachable) {
        for (point of point_to_reachable[root_point]) {
            point_to_reachable[root_point] = point_to_reachable[point] ? point_to_reachable[root_point].concat(point_to_reachable[point]) : point_to_reachable[root_point];
        }
    }
    for (root_point in point_to_reachable) {
        point_to_reachable[root_point] = new Set(point_to_reachable[root_point]);
    }
    // console.log(point_to_reachable);

    const Q = Number(input[M + 1]);
    let black_points = [];
    for (let j = M + 2; j < (M + 2) + Q; j++) {
        let [type, v] = input[j].split(" ").map(Number);
        if (type == 1) {
            black_points.push(v);
        } else if (type == 2) {
            let can_reachable = false;
            for (bp of black_points) {
                if (point_to_reachable[v].has(bp)) {
                    console.log("Yes");
                    can_reachable = true;
                    break;
                }
            }
            if (!can_reachable) {
                console.log("No");
            }
        } else {
            console.log("存在しません");
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));