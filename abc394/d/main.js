function Main(input) {
    let answer = "Yes";
    const s = input[0].split("");

    //ペアで(2個ずつ)削除するため、奇数だと残ることが確定のため、"No".
    if (s.length % 2 != 0) answer = "No";


    let small_left = 0; // "("
    let small_right = 0; // ")"
    let medium_left = 0; // "["
    let medium_right = 0; // "]"
    let big_left = 0; // "<"
    let big_right = 0; // ">"

    // let count = [small_left, small_right, medium_left, medium_right, big_left, big_right];

    for (let i = 0; i < s.length; i++) {

        switch (s[i]) {
            case "(":
                small_left++;
                if (s[i + 1] == "]" || s[i + 1] == ">") answer = "No";
                break;

            case ")":
                small_right++;
                if (small_left == 0) answer = "No";
                break;

            case "[":
                medium_left++;
                if (s[i + 1] == ")" || s[i + 1] == ">") answer = "No";
                break;

            case "]":
                medium_right++;
                if (medium_left == 0) answer = "No";
                break;

            case "<":
                big_left++;
                if (s[i + 1] == "]" || s[i + 1] == ")") answer = "No";
                break;

            case ">":
                big_right++;
                if (big_left == 0) answer = "No";
                break;

            default:
                break;
        }

    }

    // 括弧の右と左が同じ数で無ければ必ずNo.
    if (small_left != small_right || medium_left != medium_right || big_left != big_right) answer = "No";


    if (answer == "Yes") {
        console.log("Yes");
    } else {
        console.log("No");
    }


}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));