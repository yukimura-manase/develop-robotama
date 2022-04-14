// 配列(array)を操作するメソッドは、たくさんある！ => 1つ1つの特性と、できること、使うタイミングをしっかりと把握する。


// <reduce()メソッド> => 配列の各要素を順番に累積して1つの値にできる！
// reduce => 減らす,削除する,切り詰める

//reduce()は対象となる配列に対して任意の関数を実行することができます。

// 配列.reduce( (累積値, 要素) => { })
// 第1引数の「累積値」には、配列要素を順番に処理していった値が格納されます。 => 処理した後の要素が累積されていく！
// 第2引数の「要素」は現在処理されている配列要素を意味しています。 => 配列から取り出してきた現在の要素が入っている！
// この関数内で「return」を使い、任意の処理を返すことで累積値に結果が保持されて最終的に1つの値となって取得できるわけです。

// 配列の各要素を合計する方法
// それでは、簡単なサンプル例をプログラミングしながら実際の使い方を見ていきましょう。冒頭でも少し触れましたが、配列に格納された数値データをすべて合計した値を取得してみます。

// reduceは4つの引数をとり、それぞれ「直前の結果」「今回の値」「連番」(index)「自身の配列」を示します。

let numbers = [1,2,3,4,5,6,7,8,9];

let result = numbers.reduce((a, b)=> {
 
  return a + b;
 
})
 
console.log(result); // 45



// < sortメソッドの使い方 >
// < 参照 > https://qiita.com/mzmz__02/items/d8ae06b84c3368e3147e

// < 昇順 > (数値の低い順)
function sortNumber(a, b) { // 比較関数
  return a - b;
}

let num = [5, 3, 10, 6, 72, 27];
num.sort(sortNumber); // [3, 5, 6, 10, 27, 72]

// < 降順 > (数値の高い順)
function sortNumber(a, b) {
  return b - a;
}

let num = [5, 3, 10, 6, 72, 27];
num.sort(sortNumber);

console.log(num); //  [72, 27, 10, 6, 5, 3]


// sortメソッドの注意点
// 　記事の冒頭でsortメソッドは元の配列を変更してしまう「破壊的メソッド」であると書いた。元の配列を残しておきたい場合には、sliceメソッドで配列のコピーを作成しておくといい。

let str = ["baseball", "soccer", "tennis", "swimming", "basketball"];
let str_copy = str.slice();
str.sort();

console.log(str);
console.log(str_copy);

// 実行結果
// ["baseball", "basketball", "soccer", "swimming", "tennis"]
// ["baseball", "soccer", "tennis", "swimming", "basketball"]