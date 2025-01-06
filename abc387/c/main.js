function Main(input) {
    const [L, R] = input[0].split(" ").map(Number);
    const Ls = String(L).split("").map(Number); //1桁ごと配列の要素に格納.
    const Rs = String(R).split("").map(Number);

    let count = 0; // ヘビ数の個数を記録.

    let isSnakeNumberL = true; //Lがヘビ数であるか.
    let isSnakeNumberR = true;

    // Lがヘビ数でなかったとき、L以下のヘビ数で最大のものに変更する.(後で行う進数変換のため).
    for (let i = 1; i < Ls.length; i++) {
        if (Math.max(Ls[0], Ls[i]) == Ls[i]) {
            isSnakeNumberL = false;
            for (let n = i; n < Ls.length; n++) {
                Ls[n] = Ls[0] - 1;
            }
            break;
        }
    }
    // Rがヘビ数でなかったとき、R以下のヘビ数で最大のものに変更する.(後で行う進数変換のため).
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
    // X*(10**Y)以上 (X+1)*(10**Y)-1以下のヘビ数はX**Y個あるため.
    const firstDigitsNumberL = Ls[0]; // Lの先頭の桁（最も大きい位）の数.
    let base = firstDigitsNumberL; // 基数.
    for (let i = Ls.length - 1; i <= Rs.length - 1; i++) {

        for (let k = base; k < 10; k++) {
            if (k == Rs[0] && i == Rs.length - 1) {
                break;
            }
            count += k ** i;
        }
        base = 1;
    }

    // Lの先頭の桁（最も大きい位）より後の桁を全て0とした値からLまでのヘビ数の個数を求める.
    const LsShift = [...Ls]; // Lの先頭の桁（最も大きい位）以外の数を格納する変数.
    const LsShiftRetrn = LsShift.shift(); // Lの先頭の桁（最も大きい位）の数.
    count -= (LsShiftRetrn == 1 ? 0 : parseInt(LsShift.join(""), LsShiftRetrn)) + 1;
    if (isSnakeNumberL) {
        count++;
    }

    const RsShift = [...Rs];
    const RsShiftRetrn = RsShift.shift(); // Rの先頭の桁（最も大きい位）の数.
    count += (RsShiftRetrn == 1 ? 0 : parseInt(RsShift.join(""), RsShiftRetrn)) + 1;


    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));