function Main(input) {
    const [D, F] = input[0].split(" ").map(Number);
    // let waru = Math.ceil(((D - F) + 7) / 7);
    let amari = ((D - F) + 7) % 7;
    // let amari2 = (D % 7) + F;
    // console.log(waru);
    // console.log(amari);
    console.log(7 - amari);
    // console.log(waru * 7 - D);
    // console.log(amari2);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));