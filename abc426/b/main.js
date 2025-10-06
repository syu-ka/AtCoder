function Main(input) {
    const s = input[0].split("");
    const first_s = s[0];
    let first_s_count = 0;
    let second_s = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === first_s) {
            first_s_count++;
        } else {
            second_s = s[i];
        }
    }
    if (first_s_count > 1) {
        console.log(second_s);
    } else if (first_s_count === 1) {
        console.log(first_s);
    } else {
        console.log("ERROR");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));