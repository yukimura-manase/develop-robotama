// 構文の拡散（...）
// Spread構文（...）を使用すると、ゼロ個以上の引数（関数呼び出しの場合）
// または要素（配列リテラルの場合）が予想される場所で配列式や文字列などの反復可能オブジェクトを展開したり、ゼロの場所でオブジェクト式を展開したりできます。
// 以上のキーと値のペア（オブジェクトリテラルの場合）が必要です。

// spreadは「広げる」「拡散する」といった意味になります。

// <結論> スプレッド構文とは => カッコをパージする構文！ => Alexの装甲パージのようなイメージ
// スプレッド構文を一言で説明すると、大括弧[]や中括弧{}を外してくれるものです。言い換えれば、配列やハッシュ構造を展開してくれるものになります。


// 配列やオブジェクトの様子を展開する！

const array = [1,2,[3,4]]
console.log(array) // [1,2,[3,4]]
console.log(...array) // 1 2 [3,4]

let sum = (x, y, z) => {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  // パージしたものを引数にそれぞれ渡す
  console.log(sum(...numbers)); // 出力結果は6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6

  
  let Robotama = [
    {id:1,name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}] },
    {id:2,name:'ロボ玉試作2号機', status:[{power:3000,defense:3000,speed:1000},{special:'ロボ玉バズーカー'}] },
    {id:3,name:'ロボ玉試作3号機', status:[{power:3000,defense:3000,speed:3000},{special:'ロボ玉ジャスティス！！'}] },
    {id:4,name:'NeoRobotama', status:[{power:5000,defense:5000,speed:5000},{special:'ロボ玉・グランドクロス'}] },
    {id:5,name:'UnicornRobotama', status:[{power:5000,defense:5000,speed:5000},{special:'NTDR'}] },
    {id:6,name:'春のロボ祭り！！', status:[{power:5000,defense:5000,speed:5000},{special:'NTDR'}] },
    {id:7,name:'夏のロボ祭り！！', status:[{power:5000,defense:5000,speed:5000},{special:'NTDR'}] }
];

let RobotamaPirot = [
    {id:1,pirotName:'群馬のまー'},
    {id:2,pirotName:'埼玉のまー'},
    {id:3,pirotName:'栃木のまー'},
    {id:4,pirotName:'茨城のまー'},
    {id:5,pirotName:'東京のまー'},
]


  let object1 = {id:1,pirotName:'群馬のまー'}
  
  let object2 = {id:1,name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}]}
  let ID = 12


  console.log({...object1,id:ID}) //{id: 12, pirotName: "群馬のまー"} => id: 12 ,pirotName: "群馬のまー" [[Prototype]]: Object

