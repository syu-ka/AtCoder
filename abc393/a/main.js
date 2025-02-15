function Main(input) {
    const [s1, s2] = input[0].split(" ");
    if (s1 == "sick") {
        if (s2 == "sick") {
            console.log(1);
        } else {
            console.log(2);
        }
    } else {
        if (s2 == "sick") {
            console.log(3);
        } else {
            console.log(4);
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));