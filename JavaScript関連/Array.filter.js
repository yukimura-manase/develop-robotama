
// 配列から条件で検索し、取得できるfilter関数の使い方

// 1. 「配列.filter()」では、配列から検索してヒットした値を取得できます。

let array = [100, 200, 300, 400, 500];

// 条件式に合致するものの値を返す！
let arrayCheck = array.filter(value => value >= 300); // 300以上のみ取得

//let arrayCheck = array.map(hikisu => hikisu >= 300); // 出力結果 => [false, false, true, true, true]

console.log(arrayCheck); // 出力結果 => [300, 400, 500]

//mapとfilterの違い！


// 検索して見つからない場合は空の配列が返ります。
let array = [100, 200, 300, 400, 500];

//700以上のみ取得（存在しないため空の配列が返る）
let arrayCheck = array.filter(value => value >= 700);

console.log(arrayCheck); // 出力結果 => []

// <超重要> filterとfindの使い分けポイント！
// filter : 中身を1つずつ取り出して、条件に合致するものを「配列」の形で返す！ => filterをかけてヒットするものを「配列」に加工して、呼び出し元に返してくれる！

// find   : 中身を1つずつ取り出して、条件に合致するものの「値」(value)そのものを返す！ => 特定の値を探して持ってくる！

// filterは検索してヒットしたものを配列として返すので、例えばヒットした値を複数取得したい場合はfilterを使用しましょう。


// 検索と言っていますが、配列から「設定した条件のもの」を削除したい、といった場合でも有効です。
// 設定した条件に該当する配列をまとめて取得して・・・spliceする！！


// filterで複数条件から検索する方法 => filterは複数の条件を設定することが出来ます。

// ただし、1行で省略した書き方ですと条件の数次第では見づらくなるので、{}で展開して複数行書けるようにすると見やすくなります。

// valueには配列の値が入り、条件を満たした値の場合はtrueを返すようにしましょう。

var array = [100, 200, 300, 400, 500, 11, 22, 33, 44, 55, 111, 222, 333, 444, 555];

//300未満かつ奇数の値を取得
var aryCheck = array.filter(value => {
    if(300 > value && value % 2 !== 0){
        return true;
    }
});

console.log(aryCheck);


// filterで連想配列（オブジェクト）から検索する方法
// オブジェクト入り配列の連想配列でも、filterによる取得・削除が出来ます。

var array = [
   {no : 1, name : 'Apple', price: 50},
   {no : 2, name : 'Banana', price: 80},
   {no : 3, name : 'Cherry', price: 50},
   {no : 4, name : 'Orange', price: 60},
   {no : 5, name : 'Melon', price: 100},
];

//priceが80以上を取得
var aryCheck = array.filter(value => {
   if(value.price >= 80){
       return true;
   }
});

console.log(aryCheck);



//priceが80以上を取得
var aryCheck = array.filter(value => {
    if(value.price >= 80){
        return true;
    }
});

console.log(aryCheck);
[{"no":2,"name":"Banana","price":80},{"no":5,"name":"Melon","price":100}]

// filterで一致する文字列を取得する検索
// 文字列を部分一致、前方一致、後方一致で取得したい場合は、filterの条件でmatch関数を使用します。

// 部分一致（特定の文字列を含む）

var array = ['fuga', 'hoge', 'piyo', 'yoga'];

//配列から"og"と書かれた値を取得する
var aryCheck = array.filter(value => value.match(/og/g));

console.log(aryCheck);
["hoge","yoga"]

//前方一致で検索
var array = ['fuga', 'hoge', 'piyo', 'yoga'];

//先頭がpiから始まる文字の値を配列内で検索し、新たな配列を生成
var aryCheck = array.filter(value => value.match(/^pi/g));

console.log(aryCheck);
["piyo"]

//後方一致で検索
var array = ['fuga', 'hoge', 'piyo', 'yoga'];

//後方がgaで終わる文字の値を配列内で検索し、新たな配列を生成
var aryCheck = array.filter(value => value.match(/ga$/g));

console.log(aryCheck);

