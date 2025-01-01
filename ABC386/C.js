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
  const K = Number(lines[0]);
  const S = lines[1];
  const Ss = S.split("");
  const T = lines[2];
  const Ts = T.split("");

  if (Ss.length - Ts.length == 1) {
    //S中の文字を1つ選び、削除する.
    for (let i = 0; i < Ss.length; i++) {
      if (Ss[i] != Ts[i]) {
        Ss.splice(i, 1);
        break;
      }
    }
  } else if (Ss.length - Ts.length == 0) {
    //S中の文字を1つ選び、別の1つの文字に変更する.
    for (let i = 0; i < Ss.length; i++) {
      if (Ss[i] != Ts[i]) {
        Ss.splice(i, 1, Ts[i]);
        break;
      }
    }
  } else if (Ss.length - Ts.length == -1) {
    //S中の(先頭や末尾を含む)任意の位置に、任意の文字を1つ挿入する.
    for (let i = 0; i < Ss.length; i++) {
      if (Ss[i] != Ts[i]) {
        Ss.splice(i, 0, Ts[i]);
        break;
      }
    }
    //Sの末尾位置に、Tの最後の文字を1つ挿入する.
    if (Ss.join("") != Ts.join("")) {
      Ss.push(Ts[Ts.length - 1]);
    }
  }

  if (Ss.join("") == Ts.join("")) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
