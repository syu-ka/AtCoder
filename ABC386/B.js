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
  const Ss = lines[0].split("");
  let button00Count = 0;

  for (let i = 0; i < Ss.length; i++) {
    if (Ss[i] == 0 && Ss[i + 1] == 0) {
      button00Count++;
      i++;
    }
  }

  console.log(Ss.length - button00Count);
});
