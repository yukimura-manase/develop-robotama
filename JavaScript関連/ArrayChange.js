// 配列の状態を変更する方法のパターン(型)

let charas = [];

// 1.配列に要素を追加する！
charas.push('ロボ玉');
console.log(charas[0]);

// 2.配列に要素をまとめて追加したい！
// スプレッド演算子「...」を使って配列を展開した要素をpush()で追加すればOK。

charas.push('ロボ玉試作1号機','ロボ玉試作2号機'); //複数選択でpush可能！
console.log(charas[1],charas[2]);

// charas.push(...['ロボ玉試作1号機','ロボ玉試作2号機']);
// console.log(charas[1],charas[2])

//-------------------------------------------------------------------------------

// 3.配列の要素を変更する！ => splice(つなぎ合わせる。接合する。意味合いの英単語)

// <配列>.splice(<始まりのインデックス>, <変更する要素数>, <変更後の要素>)

let charas = ['ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉'];

charas.splice(2,1,'ロボ玉試作3号機');
console.log(charas);

// 4.まとめて変更もできる！
let charas = ['ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉'];
charas.splice(2,2,'ロボ玉試作3号機','Neoロボ玉');
console.log(charas);


// 5.配列の要素を削除する！

// <配列>.splice(<始まりのインデックス>, <削除する要素数>)
let charas = ['ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉'];
charas.splice(2,1);
console.log(charas);

// 6.配列の要素をすべて削除する！
let charas = ['ロボ玉','ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉試作3号機','Neoロボ玉'];
charas.splice(0,charas.length);
console.log(charas);

// 7.配列をすべて入れ替えたい！
let charas = ['ロボ玉','ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉試作3号機','Neoロボ玉'];
charas.splice(0,charas.length);
charas.push('ロボ・ロボ玉','グンマー帝国のロボ玉')

console.log(charas);


// 8.配列そのものを削除したい！
let charas = ['ロボ玉','ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉試作3号機','Neoロボ玉'];
charas = null; // 無になる・空になる！
charas.push('ロボ・ロボ玉','グンマー帝国のロボ玉')
console.log(charas);

// 番外編:配列の初期化(ただの空配列の代入) => 配列の中身を細かく指定して削除する操作は、splice！
let charas = ['ロボ玉','ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉試作3号機','Neoロボ玉'];
charas = [];
charas.push('ロボ・ロボ玉','グンマー帝国のロボ玉')
console.log(charas);

// 配列の書き換え！
let charas1 = ['ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉'];

let charas2 = ['ロボ玉','ロボ玉試作1号機','ロボ玉試作2号機','ロボ玉試作3号機','Neoロボ玉'];

charas1 = charas2
console.log(charas1)


