function Main(input) {
    const D = input[0];
    let answer;
    switch (D) {
        case "N":
            answer = "S";
            break;

        case "E":
            answer = "W";
            break;

        case "W":
            answer = "E";
            break;

        case "S":
            answer = "N";
            break;

        case "NE":
            answer = "SW";
            break;

        case "NW":
            answer = "SE";
            break;

        case "SE":
            answer = "NW";
            break;

        case "SW":
            answer = "NE";
            break;

        default:
            break;
    }
    console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));