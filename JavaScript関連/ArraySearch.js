// 条件に一致する配列の要素を検索する方法


// 1.条件に一致するインデックスを取得する(findIndexメソッド)
let result = [75, 68, 92, 84, 90];

// findIndexでは、中にある条件式がtrueの場合、「該当のindex番号」を返す！
let passIndex = result.findIndex( element => {
  return element > 85; //真偽の判断をして、最初のtrue情報を返す。 => 最初のtrueのindex番号を返す！
});

console.log(passIndex); // 「2」(最初に該当した要素のindex番号)


// 2.条件に一致する要素の値を取得する(findメソッド)
// 戻り値として true が返された時に find メソッドは「その要素の値」を返します。

let result = [75, 68, 92, 84, 90];

let passValue = result.find( element => {
  return element > 85;
});

console.log(passValue); // 「92」(最初に該当した要素の値・データ)


// 3.少なくとも一つの要素が条件に一致するかどうか(someメソッド) => 真偽値を返してくれる！

let result = [75, 68, 92, 84, 90];

let checkOver85 = result.some(element => element > 85);
console.log(checkOver85); // 「true」

let checkUnder60 = result.some(element => element < 60);
console.log(checkUnder60); // 「false」

// 4.すべての要素が条件に一致するかどうか(everyメソッド) => 真偽値を返してくれる！

let result = [75, 68, 92, 84, 90];

let checkOver60 = result.every(element => element > 60);
console.log(checkOver60); // 「true」

let checkUnder90 = result.every(element => element < 90);
console.log(checkUnder90); // 「false」

// 5.配列の先頭から検索する(indexOfメソッド)
// Array オブジェクトの indexOf メソッドを使うと指定した値を持つ要素を配列の先頭から検索することができます。
// 配列名.indexOf(値)
// 配列名.indexOf(値, 開始インデックス)

// 引数に指定した値を持つ要素を配列の先頭から順に検索し、一致したものが見つかった場合はそのインデックスを返します。
// 見つからなかった場合は -1 が返されます。一致するかどうかは === 演算子を使って行われます。

let week = ['Mon', 'Sat', 'San', 'Sat', 'Fri'];

let indexSan = week.indexOf('San');
console.log(indexSan); // 該当データのindex番号が返される「2」

let indexTue = week.indexOf('Tue');
console.log(indexTue); // 該当データがないから、-1が返される！

// 6.配列の最後から検索する(lastIndexOfメソッド)もある！ => 使い方はindexOfと一緒！


// filter : 検索してヒットしたものを配列で返す
// find : 検索して最初にヒットした値を返す


// 部分一致で配列内を検索する方法（正規表現）
// 特定の文字が含まれていればhit扱いしたい場合は、正規表現のmatch関数を使用します。
// 先頭で一致した箇所を調べる「前方一致」、末尾で一致した箇所を調べる「後方一致」もmatch関数で行えます。


// 「配列.find()」でオブジェクトが入った配列を検索する方法
// find関数でオブジェクト入り配列も検索することが出来ます。=> 検索条件にプロパティを指定することで、そのプロパティの条件を設定することが出来ます。

// 配列内に値段（price）が100円以上のものを取得する処理です。
let array = [
  {no : 1, name : 'Apple', price: 50},
  {no : 2, name : 'Banana', price: 80},
  {no : 3, name : 'Cherry', price: 50},
  {no : 4, name : 'Orange', price: 60},
  {no : 5, name : 'Melon', price: 100},
];
//priceが100以上
let check = array.find(value => value.price >= 100);

console.log(check); // {no: 5, name: "Melon", price: 100} => オブジェクトも値の1単位だぜ！



// filter

// includesメソッド





