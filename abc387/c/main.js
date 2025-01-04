function Main(input) {
    const [L, R] = input[0].split(" ").map(Number);
    const Ls = String(L).split("").map(Number);
    const Rs = String(R).split("").map(Number);
    const firstDigitsL = 10**(Ls.length-1); // Lの先頭の桁（最も大きい位）.
    const borrowingL = Math.floor(L/firstDigitsL)*firstDigitsL; //Lの先頭の桁（最も大きい位）の切り捨て.
    const firstDigitsR = 10**(Rs.length-1); //Rの先頭の桁（最も大きい位）.
    const borrowingR = Math.floor(R/firstDigitsR)*firstDigitsR; //Rの先頭の桁（最も大きい位）の切り捨て.
    let count = 0;
    
    // 300以上 399以下でヘビ数は3^2個あるため.
    // X*(10**Y)以上 (X+1)*(10**Y)-1以下のヘビ数はX^Y個あるため.
    const firstDigitsNumberL = Ls[0]; // Lの先頭の桁（最も大きい位）の数.
    let base = firstDigitsNumberL; // 基数.
    for(let i = Ls.length-1; i <= Rs.length-1; i++){
        // console.log("i="+i);
        for(let k = base; k < 10; k++){
            // console.log("k="+k);
            count += k ** i;
            if(k == Rs[0]-1 && i == Rs.length-1){
                break;
            }
        }
        base = 1;
    }

    for(let i = borrowingL; i < L; i++){
        let is = String(i).split("").map(Number);
        let isCopy = is;
        let isShift = is.shift();
            if(isShift > Math.max(...is)){
                count--;
            }
    }
    
    for(let i = borrowingR; i <= R; i++){
        let is = String(i).split("").map(Number);
        let isCopy = is;
        let isShift = is.shift();
            if(isShift > Math.max(...is)){
                count++;
            }
    }
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));