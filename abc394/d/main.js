function Main(input) {
    let answer = "Yes";
    const s = input[0].split("");

    //ペアで(2個ずつ)削除するため、奇数だと残ることが確定のため、"No".
    if (s.length % 2 != 0) answer = "No";


    for (let i = 0; i < s.length; i++) {

        switch (s[i]) {
            case "(":
                if (s[i + 1] == "]" || s[i + 1] == ">") answer = "No";
                break;

            case "[":
                if (s[i + 1] == ")" || s[i + 1] == ">") answer = "No";

                break;

            case "<":
                if (s[i + 1] == "]" || s[i + 1] == ")") answer = "No";

                break;

            default:
                break;
        }

    }

    if (answer == "Yes") {
        console.log("Yes");
    } else {
        console.log("No");
    }


}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));