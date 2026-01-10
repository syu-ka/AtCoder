/* 
    マスiを黒く塗るためにはコストがCiかかります。
    - 生成数xを自由に選ぶ
    - 1<=i<=Nを満たす整数iの内、(i+x)を2Wで割ったあまりがWより小さくなるものすべてに対し、マスiを黒く塗る
    この手順を行うためのコストの合計の最小値.

*/

function Main(input) {
    const T = Number(input[0]);

    for (let i = 1; i <= T; i++) {
        const [N, W] = input[2 * i - 1].split(" ").map(Number);
        const div = 2 * W;
        let remainder_to_sum = Array.from({ length: div }, (_, i) => 0);
        let C = input[2 * i].split(" ").map(Number);
        for (let j = 0, remainder = 1; j < N; j++) {
            remainder_to_sum[remainder] += C[j];
            if (remainder >= div - 1) {
                remainder = 0;
            } else {
                remainder++;
            }
        }

        // 最小値
        let min = 200000;
        for (let j = 0; j < div; j++) {
            let tmp_sum = 0;
            for (let k = 0; k < W; k++) {
                let tmp_div = j + k;
                if (j + k >= div) {
                    tmp_div = j + k - div;
                }
                tmp_sum += remainder_to_sum[tmp_div];
            }
            min = Math.min(min, tmp_sum);
        }
        console.log(min);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));