function Main(input) {
    const N = Number(input[0]);
    let grid = [...Array(N)].map(() => Array(N).fill(0));

    let first_coor_r = 0;
    let first_coor_c = (N - 1) / 2;
    grid[first_coor_r][first_coor_c] = 1;
    // console.log(grid);
    // console.log(grid[first_coor_r][first_coor_c]);

    let prev_coor_r = first_coor_r;
    let prev_coor_c = first_coor_c;
    for (let i = 2; i <= N * N; i++) {
        let current_coor_r = (((prev_coor_r - 1) % N) + N) % N;
        let current_coor_c = (((prev_coor_c + 1) % N) + N) % N;
        // console.log("(current_coor_r, current_coor_c) = ", current_coor_r, current_coor_c);
        if (grid[current_coor_r][current_coor_c] == 0) {
            grid[current_coor_r][current_coor_c] = i;
            prev_coor_r = current_coor_r;
            prev_coor_c = current_coor_c;
        } else {
            current_coor_r = (((prev_coor_r + 1) % N) + N) % N;
            current_coor_c = prev_coor_c;
            grid[current_coor_r][current_coor_c] = i;
            prev_coor_r = current_coor_r;
            prev_coor_c = current_coor_c;
        }
    }
    for (let i = 0; i < N; i++) {
        console.log(grid[i].join(" "))
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));