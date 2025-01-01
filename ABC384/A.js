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
  const N = Number(lines[0].split(" ")[0]); //長さNの英子文字.
  const [c1, c2] = lines[0].split(" ").slice(1); //c1,c2:英小文字.
  const S = lines[1]; //長さNの英子文字からなる文字列S.
  const S_arr = S.split(""); //文字列Sを一文字ずつ配列S_arrに格納.

  for (let i = 0; i < N; i++) {
    if (S_arr[i] != c1) {
      S_arr[i] = c2;
    }
  }
  console.log(S_arr.join(""));
});
