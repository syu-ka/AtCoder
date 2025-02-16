function Main(input) {
    let count = 0;

    const N = Number(input[0]);
    const S = input[1].split("");
    // console.log(N);
    // console.log(S);

    let isLeft1 = false;  //左に1があるか.
    let isRigth1 = false;  //右に1があるか.
    let mostLeft1;
    let mostRight1;
    let center;
    for (let i = 0; i < N; i++) {
        if (S[i] == 1 && !isLeft1) {
            isLeft1 = true;
            mostLeft1 = i;
        } else if (S[i] == 1 && isLeft1 && center > i) {
            count += center - i - 1;
        }
        if (S[N - 1 - i] == 1 && !isRigth1) {
            isRigth1 = true;
            mostRight1 = N - 1 - i;
        } else if (S[N - 1 - i] == 1 && isRigth1 && center < N - 1 - i) {
            count += (N - 1 - i) - center - 1;
        }

        if (Math.ceil(N / 2) - 1 <= i && !(isLeft1 && isRigth1)) {
            // console.log("あ");
            break;
        }
        // console.log(`Math.floor(N / 2)=${Math.floor(N / 2)}`);


        if (center == undefined && mostLeft1 != undefined && mostRight1 != undefined) {
            center = (mostRight1 - mostLeft1) % 2 == 0 ? (mostRight1 - mostLeft1) / 2 : (mostRight1 - mostLeft1 + 1) / 2;
            // console.log(center);
            count += center - mostLeft1 - 1;
            // console.log(`center - mostLeft1 - 1 = ${center - mostLeft1 - 1}`);
            count += mostRight1 - center - 1;
            // console.log(`mostRight1 - center-1 = ${mostRight1 - center - 1}`);
        }

        if (i > center && N - 1 - i < center) break;
    }

    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));