function Main(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let point_to_reachable = {};
    for (let i = 1; i <= M; i++) {
        let [X, Y] = input[i].split(" ").map(Number);
        point_to_reachable[X] = (point_to_reachable[X] || new Set());
        point_to_reachable[X].add(Y);
    }
    console.log(point_to_reachable);
    // console.log(point_to_reachable[1]);
    // console.log(point_to_reachable[2]);
    // console.log(point_to_reachable[1].union(point_to_reachable[2]));
    // let root_points = [...Array(point_to_reachable)];
    // console.log(`root_points=${root_points}`);
    let root_points = [];
    for (point in point_to_reachable) {
        root_points.push(point);
    }
    console.log("root_points=", root_points);
    for (root_point of root_points) {
        // console.log(root_point);
        // console.log("point_to_reachable[root_point]", point_to_reachable[root_point]);
        let points = [];
        point_to_reachable[root_point].forEach((point) => {
            points.push(point);
            // console.log(`point = ${point} `);
            // console.log("point_to_reachable[point]", point_to_reachable[point]);
        })
        for (point of points) {
            point_to_reachable[root_point].add(point_to_reachable[point])
        }
    }

    // for (root_point in point_to_reachable) {
    //     console.log(`root_point=${root_point}`);
    //     // let reachable_points = Array.from(point_to_reachable[root_point]);
    //     // point_to_reachable[root_point].add(reachable_points);
    //     // console.log(reachable_points);
    //     console.log(`point_to_reachable[root_point]=${[...point_to_reachable[root_point]]} `);

    //     // point_to_reachable[root_point].forEach((point) => {
    //     //     console.log(`point = ${ point } `);
    //     //     point_to_reachable[root_point].union(point_to_reachable[point]);
    //     //     console.log(`point_to_reachable[root_point] = ${ point_to_reachable[root_point] } `);
    //     //     console.log(point_to_reachable[point]);
    //     // })
    // }

    const Q = input[M + 1].split(" ").map(Number);
    for (let i = M + 2; i < (M + 2) + Q; i++) {

    }
    console.log(point_to_reachable);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));