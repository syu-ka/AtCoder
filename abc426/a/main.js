function Main(input) {
    const [x, y] = input[0].split(" ");
    if (x === "Lynx") {
        if (y === "Ocelot" || y === "Serval" || y === "Lynx") {
            console.log("Yes");
            return;
        }
    } else if (x === "Serval") {
        if (y === "Ocelot" || y === "Serval") {
            console.log("Yes");
            return;
        }
    } else if (x === "Ocelot") {
        if (y === "Ocelot") {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));