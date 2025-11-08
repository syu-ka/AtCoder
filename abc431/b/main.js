function Main(input) {
    const x = Number(input[0]);
    let robot_weight = x; // ロボットの初期の重さ.
    const n = Number(input[1]);
    const w = input[2].split(" ").map(Number);
    let is_installed_w = Array.from({ length: n }, (_, i) => (false));
    const q = Number(input[3]);
    const p = [];
    for (let i = 0; i < q; i++) {
        const tmp_p = Number(input[i + 4]);
        if (is_installed_w[tmp_p - 1]) {
            robot_weight -= w[tmp_p - 1];
            is_installed_w[tmp_p - 1] = false;
        } else {
            robot_weight += w[tmp_p - 1]
            is_installed_w[tmp_p - 1] = true;
        }
        console.log(robot_weight);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));