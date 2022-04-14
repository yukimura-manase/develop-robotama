Object.keys(obj) //キーの配列を返します。
Object.values(obj) //値の配列を返します。
Object.entries(obj) //[key, value] ペアの配列を返します。
//しかし、それらの違いに注意してください(例として map との比較です。)

// Map	Object
// 構文	map.keys()	Object.keys(obj). obj.keys() ではありません。
// 戻り値	iterable	“本当の” Array
// ①最初の違いは、obj.keys() ではなく、Object.keys(obj) と呼ぶ必要がある点です。

//なぜそうなっているのでしょう？主な理由は柔軟性です。JavaScript ではオブジェクトはすべての複雑な構造のベースであることを忘れないでください。そのため、独自の order.values() メソッドを実装する order という独自のオブジェクトがあるかもしれません。それでも Object.values(order) を呼ぶことができます。

// ②2つ目の違いは、Object.* メソッドが単なる iterable ではなく “本当の” 配列オブジェクトを返すことです。これは主に歴史的な理由です。

let user = {
  name: "John",
  age: 30
};
Object.keys(user) = [name, age]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]




// オブジェクトには、配列に存在する多くのメソッドがありません。例えば map, filter など。

// それらを適用したい場合は、Object.fromEntries に続いて、Object.entries が使用できます。:

// Object.entries(obj) を使用して obj からキー/値ペアの配列を取得します。
// その配列で、配列のメソッドを使用します。例えば map
// 結果の配列で Object.fromEntries(array) を使用して、配列をオブジェクトに戻します。
// 例えば、価格をもつオブジェクトがあり、それらを2倍したいとします。:

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 配列に変換して map を実行、その後 fromEntries でオブジェクトに戻します
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
// 一見難しく見えますが、1,2回使うと簡単に理解できます。このようにして協力な変換のチェーンを作ることができます。

let usecartInfo = Object.assign({}, state.useCart)
      // Object.assign() メソッドは、すべての列挙可能な自身のプロパティの値を、 1 つ以上のコピー元オブジェクトからコピー先オブジェクトにコピーするために使用
      // 第一引数に指定したオブジェクトに第二引数以降の全てのオブジェクトのプロパティを第一引数に指定したオブジェクトにコピーしてくれる。
      // 第一引数に無名オブジェクトを指定することで、コピーした内容の新規オブジェクトを作成できる。


// 値渡しサンプル
// assign関数が使えます。
// 元の関数に対して引数で与えたオブジェクトを上書きしていく関数です。

// コピー元のオブジェクトに空のオブジェクトを使用することで値渡しの
// オブジェクトのコピーを作成できます。

const obj1 = { a: 1, b: 2 }

// 値渡し
const obj2 = Object.assign({}, obj1)

// obj2を更新する
obj2.a = 10

// obj1が更新されていないことの確認
console.log(obj1)

// obj2が更新されていることの確認
console.log(obj2)



// -----------------------------------------------------------------------------------------------------------------------------

// < spread構文を使用したマージ >
const object1 = {id:1,pirotName:'群馬のまー'}
  
const object2 = {id:1,name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}]}

const merged = { ...object1, ...object2 }
console.log(merged)

// -----------------------------------------------------------------------------------------------------------------------------

const object1 = {id:1,pirotName:'群馬のまー'}
  
const object2 = {id:1,name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}]}

const merged = Object.assign({},object1,object2) // 第一引数がtarget
console.log(merged)


// -----------------------------------------------------------------------------------------------------------------------------
const object1 = {id:1,pirotName:'群馬のまー'}
  
const object2 = {id:1,name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}]}

const merged = Object.assign(object1,object2)
console.log(merged)


const merged = // 出力結果
{
  "id": 1,
  "pirotName": "群馬のまー",
  "name": "ロボ玉試作1号機",
  "status": [
      {
          "power": 2000,
          "defense": 2000,
          "speed": 3000
      },
      {
          "special": "ロボ玉ビーム"
      }
  ]
}


// ----------------------------------------------------------------------------------------------------------------------------------

let object1 = {id:1,pirotName:'群馬のまー'}
  
  let object2 = {id:1,name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}]}
  let ID = 12


  console.log({...object1,id:ID}) //{id: 12, pirotName: "群馬のまー"}