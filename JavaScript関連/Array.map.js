
// Arrayオブジェクトの「mapメソッド」は、「指定した配列」を元に「新たな配列」を生成する関数！
// コールバック関数を通じて、返却された値が配列の中身となります。

let array = [1, 2, 3, 4, 5];

let NewArray = array.map(hikisu => {
    return hikisu * 2;  //returnされた値が新たな配列の中身になる
});

console.log(NewArray); // 出力結果 => [2, 4, 6, 8, 10]


// 2.既存の関数を利用してmapを実行する場合。

const double = hikisu => hikisu * 2
  
let array = [1, 2, 3, 4, 5];

let NewArray = array.map(double);

console.log(NewArray); // 出力結果 => [2, 4, 6, 8, 10]


// 3.mapでキー(index)を取得したい場合

let array = [10, 100, 1000, 10000, 100000];

NewArray = array.map((hikisu, index) => { // 第二引数にindexを持たせる！
    return index; // indexのみを返すような処理にする！
});

console.log(NewArray); // 出力結果 => [0, 1, 2, 3, 4]

// 4.mapで条件に該当せず、returnされなかった値はundefinedまたはnullが返る！ => たぶん、ブラウザによる！

let array = [10, 100, 1000, 10000, 100000];

NewArray = array.map(value => {
    if(value >= 1000){
        return value * 2;    
    }
});

console.log(NewArray); // 出力結果 => [undefined, undefined, 2000, 20000, 200000]


// 「map」は、配列内すべての値に処理を施すメソッドなので、特定の値は省きたい、などの処理には向いていません。
// 特定の値を省くフィルタリングを行いたい場合は、filter()というメソッドがあるのでそれを使用しましょう。



// 5.連想配列(Object)をmapで操作する！ => 連想配列の一部から新しい配列を生成する！！
// mapは、オブジェクトが絡んだ配列（連想配列）で使用することが多い！ => apiで取得したjson形式のデータは、連想配列になっていることが多いから

let Robotama = [
    {name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000}] },
    {name:'ロボ玉試作2号機', status:[{power:3000,defense:3000,speed:1000}] },
    {name:'ロボ玉試作3号機', status:[{power:3000,defense:3000,speed:3000}] }
]

let NeoRobotama = Robotama.map(value => value['name']); // 同じ結果になる別の書き方 => let NewArray = array.map(value => value.name);

console.log(NeoRobotama); // 出力結果 => ["ロボ玉試作1号機", "ロボ玉試作2号機", "ロボ玉試作3号機"]


// 6.mapで配列から連想配列を生成するパターン！ => すでにある配列を利用して、連想配列を生成する！

// マイナンバーを作ろう！！ => IDを割り振った、連想配列を生成する！！ => IDは取り敢えずindex番号で割り振り！
let Humans = ['Takeda','Yosizawa','Robotama'];

let HumanID = Humans.map((hikisu,index) => {
    return {ID:index,name:hikisu}
});

// マイナンバー！
console.log(HumanID); // 出力結果 => [ {ID: 0, name: "Takeda"},{ID: 1, name: "Yosizawa"},{ID: 2, name: "Robotama"} ]



