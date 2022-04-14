
// < Node.js(標準入力)のパターン >

// パターン① /dev/stdin をreadFileSyncを利用して読み込む
var input = require("fs").readFileSync("/dev/stdin", "utf8");
console.log(input);

    // 1. 標準入力を表す特殊ファイル(/dev/stdin)をreadFileSyncで読み込みます。

    // メリット : 記述がかなりシンプル
    // デメリット: /dev/stdinはUNIX系のOSでしか利用できないので、Windowsでは利用できない


// パターン② process.stdinをreadlineモジュールを利用して読む

process.stdin.setEncoding("utf8");

var lines = []; 

var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {

  //改行ごとに"line"イベントが発火される
  lines.push(line); //ここで、lines配列に、標準入力から渡されたデータを入れる
});

reader.on("close", () => {
    
  //標準入力のストリームが終了すると呼ばれる
  console.log(lines); 
});


// パターン③ 3. process.stdinを for await...ofを利用して読む

(async () => {
    const buffers = [];
    for await (const chunk of process.stdin) buffers.push(chunk);

    const buffer = Buffer.concat(buffers);

    const text = buffer.toString();

    console.log(text);
})();




// < まとめ >
// Windowsを利用していない場合やインプットが多くない場合は1の方法を利用して、それ以外のケースでは必要に応じて2または3の方法で記述するのが良さそうだなと思いました。

// Node.jsでの標準入力の書き方をまとめてみた
// https://qiita.com/saba_can00/items/02ff28a16a0d312a5259
