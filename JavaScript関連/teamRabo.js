
// 選考の流れ
// 1. スタートボタンを押してから、1時間で選考終了になります。その間に次々と出される問題に答えていきます。
// 2. 正解だった場合は次の問題に進みます。不正解だった場合は同じ問題に戻り、正解するまで次には進めません。
// 3. 時間を使い切るか、または10問正解すると終了となり、結果画面に移ります。
// 4. 「終了する」ボタンをクリックするとその時点で終了となり、結果画面に移ります。（最後の問題は無効になります）


// 注意事項
// ・結果画面が表示される前にブラウザを閉じてはいけません。本選考を終了する場合、「終了する」ボタンを押してください。
// ・一旦開始した後は、このページに戻ることはできません。
// ・選考への参加は一人一回となります。
// ・課題の内容は口外を禁止します。
// ・選考の過程で今回のソースコード提出をお願いする場合が御座いますので、保存しておくようにお願い致します。



// 問題1
// トリボナッチ数列

// 以下のような規則で整数を並べます。

// 最初の3つの数は「1, 0, 5」である。

// それ以降は、直前の3つの整数の和を並べる。つまり、

// 4番目の整数は 1 + 0 + 5 = 6

// 5番目の整数は 0 + 5 + 6 = 11

// 6番目の整数は 5 + 6 + 11 = 22

// この規則により、次のような列ができます。

// 1, 0, 5, 6, 11, 22, 39, 72, 

// この列の28番目の整数を求めてください。


const Sum = ()=> {

    let numList = [ 1, 0, 5, 6, 11, 22, 39, 72 ];

    while(numList.length < 28){

        let NewNum = numList.slice(-3);
        console.log(NewNum);

        let sumNum = NewNum.reduce( (x,y) => x + y);

        console.log(sumNum);

        numList.push(sumNum);
        console.log(numList);
        console.log(numList.length);

    };

    console.log(numList);
};


Sum();

// 問題2
// 約数ぜんぶ足す

// 1234567890の正の約数のうち、2000000以下のものを全て足し合わせたときの和を求めてください。


const Sum = (num)=> {

    let results = [];

    for( let i = 1; i <= 2000000; i++ ) {

        if( (num % i == 0 ) ) {
            results.push(i);
        };
    }
    return results;

};

let sumList = Sum(1234567890);
console.log(sumList);

let sumNum = sumList.reduce( (x,y) => x + y);
console.log(sumNum);



// 問題3
// 3の倍数と3のつく数字だけ

// 次の条件の少なくとも一方を満たす整数のことを「A的な数」と呼ぶことにします。

// 3の倍数である。
// 十進法で書いた場合に「3」が含まれる。

// 例えば、9、31、42、135は何れも「A的な数」です。

// 1から50000までの整数のうち「A的な数」だけを足し合わせたときの合計を求めてください。


let num = [];
let strNum = [];

for ( let number = 1; number <= 50000; number++ ) {

  if (number % 3 === 0) {
      num.push(number);
  } else if( String(number).match('3')) {
      strNum.push(number);
    };

};

console.log(num)
console.log(strNum)

let sumNum1 = num.reduce( (x,y) => x + y);
console.log(sumNum1);

let sumNum2 = strNum.reduce( (x,y) => x + y);
console.log(sumNum2);

console.log(sumNum1 + sumNum2);


// 問題4
// 逆数をどんどん足していく

// 整数Nについて、1からNまでの整数の逆数の和を「Nまでの逆数和」と呼ぶことにします。

// 1までの逆数和 = 1/1 = 1

// 2までの逆数和 = 1/1 + 1/2 = 1.5

// 3までの逆数和 = 1/1 + 1/2 + 1/3 = 1.8333333333…

// 4までの逆数和 = 1/1 + 1/2 + 1/3 + 1/4 = 2.0833333333…

// Nまでの逆数和が8を超えるような最小のNを求めてください。








