function Main(input) {
    const t = input[0].split("");
    const u = input[1].split("");

    for (let i = 0; i < t.length; i++) {
        // console.log("i", i);
        if (t[i] === u[0] || t[i] === "?") {
            for (let j = 1; j <= u.length; j++) {
                if (j === u.length) {
                    console.log("Yes");
                    return;
                }

                if (t[i + j] !== u[j] && t[i + j] !== "?") {
                    break;
                }

            }
        }
    }

    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));