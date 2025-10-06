function Main(input) {
    const [n, q] = input[0].split(" ").map(Number);
    let pc_n_to_version = Array.from({ length: n }, (v, i) => i + 1); // pcの番号をインデックスとして、そのpcのバージョンを保持する配列.
    let version_to_pcCount = Array.from({ length: n + 1 }, (v, i) => i == 0 ? 0 : 1); // バージョンをインデックスとして、そのバージョンのpcの台数を保持する配列.version 0は存在しないため0にする.
    let version_to_pcCount_cumsum = Array.from({ length: n + 1 }, (v, i) => i); // version_to_pcCountの累積和を保持する配列.
    let version_to_pcCount_bitweenOldestAndVersion = Array.from({ length: n + 1 }, (v, i) => i); // 現在の最古バージョンとそのバージョンの間のバージョンをインデックスとして、そのバージョンのpcの台数を保持する配列.

    // console.log(pc_n_to_version);
    // console.log(version_to_pcCount);
    // console.log(version_to_pcCount_cumsum);
    // console.log(version_to_pcCount_bitweenOldestAndVersion);

    let oldest_version = 1; // 現在の最古バージョン

    for (let i = 1; i <= q; i++) {
        const [x, y] = input[i].split(" ").map(Number);
        if (x >= oldest_version) {
            let update_pc_count = 0;
            for (let j = oldest_version; j <= x; j++) {
                update_pc_count += version_to_pcCount[j];
                version_to_pcCount[j] = 0;
            }
            if (update_pc_count === 0) {
                console.log(0);
                continue;
            }
            console.log(update_pc_count);
            version_to_pcCount[y] += update_pc_count;

            oldest_version = x + 1;

        } else {
            console.log(0);
        }
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));