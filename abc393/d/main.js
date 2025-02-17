function Main(input) {
    let count = 0;

    const N = Number(input[0]);
    const S = input[1].split("");
    // console.log(N);
    // console.log(S);

    let isLeft1 = false;  //左に1があるか.
    let isRigth1 = false;  //右に1があるか.
    let mostLeft1; //一番左にある1の要素番号.
    let mostRight1; //一番右にある1の要素番号.
    let center; // mostLeft1とmostRight1のちょうど真ん中の要素番号.
    let countL1 = 0; // centerより左に1がいくつあったか.
    let countR1 = 0; // centerより右に1がいくつあったか.
    for (let i = 0; i < N; i++) {
        if (S[i] == 1 && !isLeft1) {
            isLeft1 = true;
            countL1++;
            mostLeft1 = [i];
        } else if (S[i] == 1 && isLeft1 && center[0] >= i) {
            if (isRigth1) {
                count += (center[0] - 1) - (i + countL1);
                countL1++;
            } else {
                mostLeft1.push(i);
                countL1++;
            }
        }
        if (S[N - 1 - i] == 1 && !isRigth1) {
            isRigth1 = true;
            countR1++;
            mostRight1 = [N - 1 - i];
        } else if (S[N - 1 - i] == 1 && isRigth1 && center[1] <= N - 1 - i) {
            if (isLeft1) {
                count += (N - 1 - i + countR1) - (center[1] + 1);
                countR1++;
            } else {
                mostRight1.push(N - 1 - i);
                countR1++;
            }
        }

        // これ以上みると探索位置が重複するため終了.
        if (Math.ceil(N / 2) - 1 <= i && !(isLeft1 && isRigth1)) {
            // console.log("あ");
            break;
        }
        // console.log(`Math.floor(N / 2)=${Math.floor(N / 2)}`);


        // center がどこか決める.
        if (center == undefined && mostLeft1 != undefined && mostRight1 != undefined) {
            let tempCenter = ((mostRight1[0] - mostLeft1[0]) / 2) + mostLeft1[0];
            if ((mostRight1[0] - mostLeft1[0]) % 2 == 0) {

                center = [tempCenter, tempCenter];
                // console.log(`center=${center}`);


                if (S[center[0]] == 0 && S[center[1]] == 0) {
                    count += center[0] - mostLeft1[0];
                    // if (S[center[1] + 1] == 0) {
                    //     count += mostRight1 - (center[1] + 1);
                    //     center[1]++;
                    // } else {
                    //     count += mostRight1 - (center[1] + 2);
                    //     center[1] += 2;
                    // }
                }
                //  else {
                //     count += (center[0] - 1) - mostLeft1;
                //     center[0]--;
                //     if (S[center[1] + 1] == 0) {
                //         count += mostRight1 - (center[1] + 1);
                //         center[1]++;
                //     } else {
                //         count += mostRight1 - (center[1] + 2);
                //         center[1] += 2;
                //     }
                // }

                // console.log(`center=${center}`);
            } else {

                center = [Math.floor(tempCenter), Math.ceil(tempCenter)];
                // console.log(`center=${center}`);

                if (S[center[0]] == 0) {
                    count += center[0] - mostLeft1[0];
                    if (S[center[1]] == 0) {
                        count += mostRight1 - center[1];
                    } else {
                        count += mostRight1 - (center[1] + 1);
                        center[1]++;
                    }
                } else {
                    count += (center[0] - 1) - mostLeft1;
                    center[0]--;
                    if (S[center[1]] == 0) {
                        count += mostRight1 - center[1];
                    } else {
                        count += mostRight1 - (center[1] + 1);
                        center[1]++;
                    }
                }

                // console.log(`center=${center}`);
            }

        }

        if (center != undefined) {
            if (center[0] <= i && N - 1 - i <= center[1]) break;
        }
    }

    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));