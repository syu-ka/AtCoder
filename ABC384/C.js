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
  const [a, b, c, d, e] = lines[i].split("");
  const ABCDE = [];
  for (let i = 0; i < 31; i++) {
    console.log(ABCDE[i]);
  }
});
