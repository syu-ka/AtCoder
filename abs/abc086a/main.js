function Main(input) {
    integralValues = input[0].split(" ");
    if((integralValues[0]*integralValues[1]) % 2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));