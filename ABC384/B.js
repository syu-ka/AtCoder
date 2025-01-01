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
  const [N, R] = lines[0].split(" ").map(Number);
  // N:高橋君がこれからARCに参加する回数(1≤N≤100).
  // R:はじめの高橋くんのレーティング(0≤R≤4229).

  let T = R; //現在のレーティング.

  for (let i = 0; i < N; i++) {
    const [D, A] = lines[i + 1].split(" ").map(Number);
    // D:i回目のARCが Div.1なら1, Div.2なら2.(1≤Di≤2 (1≤i≤N)).
    // A:i回目の高橋君がとった成績.(−1000≤Ai≤1000 (1≤i≤N)).

    switch (D) {
      case 1:
        if (1600 <= T && T < 2800) {
          T += A;
        }
        break;
      case 2:
        if (1200 <= T && T < 2400) {
          T += A;
        }
    }
  }
  console.log(T);
});
