process.stdin.resume();
process.stdin.setEncoding("utf8");
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const cards = lines[0].split(" ").map(Number);
  let x = cards[0];
  let xCount = 0;
  let y;
  let yCount = 0;

  for (let i = 0; i < cards.length; i++) {
    if (x != cards[i]) {
      y = cards[i];
      break;
    }
  }

  let output;
  for (let i = 0; i < cards.length; i++) {
    if (x == cards[i]) {
      xCount++;
    } else if (y == cards[i]) {
      yCount++;
    } else {
      output = "No";
      break;
    }
  }

  if (xCount == 1 && yCount == 3) {
    output = "Yes";
  } else if (xCount == 2 && yCount == 2) {
    output = "Yes";
  } else if (xCount == 3 && yCount == 1) {
    output = "Yes";
  } else {
    output = "No";
  }

  console.log(output);
});
