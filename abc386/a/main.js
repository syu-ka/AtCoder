function Main(input) {
    input = input.split("\n");
    const cards = input[0].split(" ");

    // 昇順に並び替える.
    function sortCards(a,b){
        return a - b;
    }
    cards.sort(sortCards);

    if(cards[0] != cards[1] && cards[1] == cards[2] && cards[2] == cards[3]){
        console.log("Yes");
    }
    else if(cards[0] == cards[1] && cards[1] != cards[2] && cards[2] == cards[3]){
        console.log("Yes");
    }else if(cards[0] == cards[1] && cards[1] == cards[2] && cards[2] != cards[3]){
        console.log("Yes");
    }else{
        console.log("No");
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));