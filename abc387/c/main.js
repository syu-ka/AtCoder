function Main(input) {
    const [L, R] = input[0].split(" ").map(Number);
    const Ls = String(L).split("").map(Number);
    const Rs = String(R).split("").map(Number);

    let count = 0;

    let isSnakeNumberL = true;
    let isSnakeNumberR = true;
    for (let i = 1; i < Ls.length; i++) {
        if (Math.max(Ls[0], Ls[i]) == Ls[i]) {
            isSnakeNumberL = false;
            for (let n = i; n < Ls.length; n++) {
                Ls[n] = Ls[0] - 1;
            }

            break;
        }
    }
    for (let i = 1; i < Rs.length; i++) {
        if (Math.max(Rs[0], Rs[i]) == Rs[i]) {
            isSnakeNumberR = false;
            for (let n = i; n < Rs.length; n++) {
                Rs[n] = Rs[0] - 1;
            }

            break;
        }
    }



    // 300以上 399以下でヘビ数は3^2個あるため.
    // X*(10**Y)以上 (X+1)*(10**Y)-1以下のヘビ数はX^Y個あるため.
    const firstDigitsNumberL = Ls[0]; // Lの先頭の桁（最も大きい位）の数.
    let base = firstDigitsNumberL; // 基数.
    for (let i = Ls.length - 1; i <= Rs.length - 1; i++) {

        for (let k = base; k < 10; k++) {
            // console.log("k="+k);
            count += k ** i;
            if (k == Rs[0] - 1 && i == Rs.length - 1) {

                const LsShift = Ls;
                const LsShiftRetrn = LsShift.shift(); // Lの先頭の桁（最も大きい位）の数.
                count -= (LsShiftRetrn == 1 ? 0 : parseInt(LsShift.join(""), LsShiftRetrn)) + 1;
                if (isSnakeNumberL) {
                    count++;
                }

                const RsShift = Rs;
                const RsShiftRetrn = RsShift.shift(); // Rの先頭の桁（最も大きい位）の数.
                count += (RsShiftRetrn == 1 ? 0 : parseInt(RsShift.join(""), RsShiftRetrn)) + 1;

                break;
            }
        }
        base = 1;
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));