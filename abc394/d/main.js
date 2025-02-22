function Main(input) {
    const s = input[0].split("");
    let eCount = 0;
    let eCount_continue = 0;
    for (let i = 0; i < s.length; i++) {
        // console.log(`i=${i}`);
        // console.log(`eCount_continue=${eCount_continue}`);

        switch (s[i]) {
            case "(":
                eCount_continue = 0;
                break;

            case ")":
                // console.log(")");

                if (s[(i - 1) - eCount_continue] == "(") {
                    // console.log("(");
                    eCount += 2;
                    if ((i - 1) - eCount_continue <= 0) {
                        eCount_continue = 0;
                    } else {
                        eCount_continue += 2;
                    }
                } else {

                    eCount_continue = 0;

                }
                break;

            case "[":
                eCount_continue = 0;
                break;

            case "]":
                // console.log("]");

                if (s[(i - 1) - eCount_continue] == "[") {
                    // console.log("[");
                    eCount += 2;
                    if ((i - 1) - eCount_continue <= 0) {
                        eCount_continue = 0;
                    } else {
                        eCount_continue += 2;
                    }
                } else {

                    eCount_continue = 0;

                }
                break;

            case "<":
                eCount_continue = 0;
                break;

            case ">":
                // console.log(">");
                if (s[(i - 1) - eCount_continue] == "<") {
                    // console.log("<");
                    eCount += 2;
                    if ((i - 1) - eCount_continue <= 0) {
                        eCount_continue = 0;
                    } else {
                        eCount_continue += 2;
                    }
                } else {

                    eCount_continue = 0;

                }
                break;

            default:
                break;
        }

    }
    // console.log(eCount);
    if (eCount == s.length) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));