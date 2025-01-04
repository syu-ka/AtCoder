function Main(input) {
    const X = Number(input[0].split(" "));
    let multi;
    let sum = 0;
    for(let i = 1; i <= 9; i++){
        for(let k = 1; k <= 9; k++){
            multi = i * k;
            if(multi != X){
                sum += multi;
            }
        }
    }
    console.log(sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));