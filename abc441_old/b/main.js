"use strict"; // JavaScriptを『厳格モード（Strict Mode）』で実行する.

function Main(input) {
    let line = 0;
    const [N, M] = input[line++].split(" ").map(Number);
    // N:Takahashi語の文字種数, M:Aoki語の文字種数.
    const S = input[line++].split(""); // S:Takahashi語の文字種.
    const Ta_set = new Set(S);
    // console.log(Ta_set);

    const T = input[line++].split(""); // T:Aoki語の文字種.
    const Ao_set = new Set(T);
    // console.log(Ao_set);
    // console.log("-----------");

    const Q = Number(input[line++]);
    for (let i = 0; i < Q; i++) {
        // console.log("-----------");

        const w = input[line++].split("");

        let can_Takahashi = true;
        let can_Aoki = true;
        for (let j = 0; j < w.length; j++) {
            if (Ta_set.has(w[j]) == false) {
                // console.log(`j=${j},T-false`);
                can_Takahashi = false;
            }
            if (Ao_set.has(w[j]) == false) {
                // console.log(`j=${j},A-false`);
                can_Aoki = false;
            }
        }
        if (can_Takahashi && can_Aoki) {
            console.log("Unknown");
        } else if (can_Takahashi) {
            console.log("Takahashi");
        } else if (can_Aoki) {
            console.log("Aoki");
        } else {
            console.log("Unknown");
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));