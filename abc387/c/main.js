function Main(input) {
    const [L, R] = input[0].split(" ").map(Number);
    let count = 0;
    let fewThan = 0;
    for(let i = L; i <= R; i++){
        let is = String(i).split("");
        let ins = is.map(Number);
        for(let k = 1; k < ins.length; k++){
            if(ins[0] > ins[k]){
                fewThan++;
            }
        }
        if(fewThan == ins.length - 1){
            count++;
        }
        fewThan = 0;
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));