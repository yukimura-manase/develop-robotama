// spliceは、sliceと同じ方法で使えるが任意の配列要素を削除・置換するメソッドである

// slice()とsplice()の違い
// 次に、「配列（Arrayオブジェクト）」の組み込みメソッドである「splice」の紹介です！

//「splice」メソッドを使う用途としては、配列の任意の要素を削除したり置換するような目的が多いため、「slice」のように任意の要素を抜き取るような目的ではあまり使われません。

// しかしながら、名称がよく似ていることや引数の指定方法が同じであるため、勘違いしやすいメソッドと言えるでしょう。

// 次のサンプルを見てください！

let array = ['青','赤', '緑', '白','黒'];
let result0 = array.splice(2); // 2から削除開始

console.log( result0 ); //["緑", "白", "黒"] => 削除した値の配列
console.log( array ); // ["青", "赤"] => 削除後の配列



let array = ['青','赤', '緑', '白','黒'];
let result1 = array.splice( 1, 2 ); // 1から2個削除開始

console.log( result1 ); // ["赤", "緑"] => 削除した値の配列
console.log( array ); // ["青", "白", "黒"] => 削除後の配列


let array = ['青','赤', '緑', '白','黒'];
let result2 = array.splice(2,2,'ロボ玉')

console.log( result2 ); // ["緑", "白"] => 削除した値の配列
console.log( array ); // ["青", "赤", "ロボ玉", "黒"] => 元配列

let array = ['青','赤', '緑', '白','黒'];
let result3 = array.splice(1,2,'ロボ玉','グンマー帝国')

console.log(result3);   // ["赤", "緑"]
console.log( array ); // ["青", "ロボ玉", "グンマー帝国", "白", "黒"] => 元配列



// このサンプルでは、「slice」「splice」どちらも同じ引数を指定しており、出力結果は違いますが正常に動作しているのが分かります。

// どちらも任意の要素を抜き取っているように見えますが、実は「splice」は指定した範囲の要素を削除しており、その削除した要素が戻り値となっている点に注意が必要です！

// その証拠に、コードの最後にもう一度「array」要素を出力していますが、「黄, 白」が削除されているため「赤, 緑」だけが出力されているのが分かります。

// このことから、「splice」メソッドを使うと元になった配列要素が変更されてしまうのに対して、「slice」メソッドは元の配列を変更しないという特徴もあります。


// splice()メソッドは、既存の要素を削除または置換したり、新しい要素を追加したりして、配列の内容を変更します所定の位置に。
//配列を変更せずに配列の一部にアクセスするには、slice()を参照してください。

// < 意味・翻訳 > splice => 継ぎ合わせる,接合する,結合する

// <構文> Array.splice(開始index,削除する数,組み込む値)
// <考え方> 配列に対して、開始indexから削除する数を指定して削除する。もしくは、組み込む値を引数に渡すと置き換えてくれる。
// 1.戻り値は、加工した値からなる配列
// 2.元の配列が変更される。
// <使い所> 特定の配列から値を削除したり、書き換えたいときに使用する！

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


