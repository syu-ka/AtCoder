function Main(input) {
    const test1 = Number(input[0]);
    const test2 = input[1].split(" ").map(Number);
    console.log(test1);
    console.log(test2);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));/* 
    マスiを黒く塗るためにはコストがCiかかります。
    - 生成数xを自由に選ぶ
    - 1<=i<=Nを満たす整数iの内、(i+x)を2Wで割ったあまりがWより小さくなるものすべてに対し、マスiを黒く塗る
    この手順を行うためのコストの合計の最小値.

*/
"use strict";

function Main(input) {
    const T = Number(input[0]);
    let line = 1;

    for (let i = 1; i <= T; i++) {
        const [N, W] = input[line++].split(" ").map(Number);
        let C = input[line++].split(" ").map(BigInt); // コストが大きくなる可能性があるため、BigInt使用.

        const div = 2 * W; // 割る数.
        // 1. 各余り(C_i % div)ごとのコスト合計を計算
        let remainder_to_sum = Array(div).fill(0n);
        for (let j = 0; j < N; j++) {
            // マス番号は1-indexedなので(j+1)%div
            let rem = (j + 1) % div;
            remainder_to_sum[rem] += C[j];
        }

        // 2. 周期性を扱うために配列を2つ繋げる
        let doubled = [...remainder_to_sum, ...remainder_to_sum];

        // 3. 累積和配列の作成.
        let prefixSum = Array(doubled.length + 1).fill(0n);
        for (let i = 0; i < doubled.length; i++) {
            prefixSum[i + 1] = prefixSum[i] + doubled[i];
        }

        // 4. 長さ W の区間和の最小値を探す
        // 元の問題の条件 (i+x) % 2W < W を満たすマスを集計するのは、
        // remainder_to_sum の連続する W 個の要素を足すことに相当するためです。
        let minSum = -1n; // 
        for (let j = 0; j < div; j++) {
            // 区間[j, j+W) の和を $o(1)$ で計算.
            let currentSum = prefixSum[j + W] - prefixSum[j];

            if (minSum === -1n || currentSum < minSum) {
                minSum = currentSum;
            }
        }
        console.log(minSum.toString());
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));