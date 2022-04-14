
"use strict";

function main(lines) { // lines: Array<string>
  /**
   * このコードは標準入力と標準出力を用いたサンプルコードです。
   * このコードは好きなように編集・削除してもらって構いません。
  */

  
  lines.forEach( (v, i) => console.log(`lines[${i}]: ${v}`) );

};

function runWithStdin() {

  let input = "";

  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", v => {
    input += v;
  });

  process.stdin.on("end", () => {
    main(input.split("\n"));
  });

};
runWithStdin();

// lines[0]: 3

// lines[1]: 3 1 5

// lines[2]: 
























