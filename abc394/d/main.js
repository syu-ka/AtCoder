function Main(input) {
    let answer = "Yes";
    const s = input[0].split("");

    //ペアで(2個ずつ)削除するため、奇数だと残ることが確定のため、"No".
    if (s.length % 2 != 0) answer = "No";


    // let small_left = 0; // "("
    // let small_right = 0; // ")"
    // let medium_left = 0; // "["
    // let medium_right = 0; // "]"
    // let big_left = 0; // "<"
    // let big_right = 0; // ">"

    let small = [0, 0]; // small[0]は"("の個数、small[1]は")"の個数.
    let medium = [0, 0]; // medium[0]は"("の個数、medium[1]は")"の個数.
    let big = [0, 0]; // big[0]は"("の個数、big[1]は")"の個数.

    // let count = [small_left, small_right, medium_left, medium_right, big_left, big_right];

    for (let i = 0; i < s.length; i++) {
        console.log(`i=${i}`);
        console.log(`answer=${answer}`);

        switch (s[i]) {
            case "(":
                small[0]++;
                if (s[i + 1] == "]" || s[i + 1] == ">") answer = "No";
                break;

            case ")":
                small[1]++;

                // 右括弧より前に左括弧があるときは必ずNo.
                if (small[0] == 0) answer = "No";

                // 括弧を閉じるときに他種類の括弧が閉じずに中にあるときは必ずNo.
                if (small[0] == small[1] && (medium != 0 || big != 0)) answer = "No";

                break;

            case "[":
                medium++;
                if (s[i + 1] == ")" || s[i + 1] == ">") answer = "No";
                break;

            case "]":
                medium--;

                // 右括弧より前に左括弧があるときは必ずNo.
                if (medium < 0) answer = "No";

                // 括弧を閉じるときに他種類の括弧が閉じずに中にあるときは必ずNo.
                if (medium == 0 && (small != 0 || big != 0)) answer = "No";

                break;

            case "<":
                big++;
                if (s[i + 1] == "]" || s[i + 1] == ")") answer = "No";
                break;

            case ">":
                big--;

                // 右括弧より前に左括弧があるときは必ずNo.
                if (big < 0) answer = "No";

                // 括弧を閉じるときに他種類の括弧が閉じずに中にあるときは必ずNo.
                if (big == 0 && (medium != 0 || small != 0)) answer = "No";

                break;

            default:
                break;
        }

    }

    // 括弧の右と左が同じ数で無ければ必ずNo.
    if (small != 0 || medium != 0 || big != 0) answer = "No";


    if (answer == "Yes") {
        console.log("Yes");
    } else {
        console.log("No");
    }


}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));