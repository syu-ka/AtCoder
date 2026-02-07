"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const N = Number(input[line++]);
    const A = input[line++].split(" ").map(Number);
    const A_max = Math.max(...A); // Aに格納されている値の最大値.

    let sum_array = Array(A_max).fill(0);

    let ketaagari_count = 0; // 桁上がりした回数.
    for (let i = 0; i < N; i++) {
        sum_array[A_max - A[i]]++;
        if (sum_array[A_max - A[i]] >= 10) {
            ketaagari_count++;
            sum_array[A_max - A[i] - 1]++;
            sum_array[A_max - A[i]] = 0;
        }
    }
    // console.log(sum_array);

    // 各桁(各要素)を累積和で埋める.
    let prefixSum = 0;
    let result_array = Array(A_max).fill(0);
    for (let i = 0; i < A_max; i++) {
        // console.log(`i=${i}, sum_array[i]=${sum_array[i]}, prefixSum=${prefixSum}`);
        prefixSum += sum_array[i];
        if (prefixSum >= 10) {
            result_array[i - 1]++;
            if (result_array[i - 1] >= 10) {
                result_array[i - 2] += result_array[i - 1] / 10;
                result_array[i - 1] %= 10;
            }
            prefixSum %= 10;
        }
        result_array[i] = prefixSum;
    }
    let shift = Array(ketaagari_count).fill(0);
    result_array.push(shift);
    console.log(result_array.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));