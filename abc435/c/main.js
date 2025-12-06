function Main(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    let effect_dist = 0; // 影響を与える(倒せる)距離.
    for (let i = 0; i < N; i++) {
        effect_dist = Math.max(effect_dist, A[i]);
        effect_dist--;
        if (effect_dist <= 0) { // 倒れなくなった時の座標i.
            console.log(i + 1);
            return;
        }
    }

    // 倒れなくなっていない = すべて倒れた.
    console.log(N);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));