// ロボ玉データ
let Robotama = [
    {name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}] },
    {name:'ロボ玉試作2号機', status:[{power:3000,defense:3000,speed:1000},{special:'ロボ玉バズーカー'}] },
    {name:'ロボ玉試作3号機', status:[{power:3000,defense:3000,speed:3000},{special:'ロボ玉ジャスティス！！'}] }
];

// <0>ロボ玉ジャスティス！！を呼び出しなさい！
console.log(Robotama[2].status[1].special)

// <1>ロボ玉たちが全員、挨拶をする関数を作りたい！！ => コンソール&アラート
const greet = (hikisu) => { // 1.呼び出す関数の作成
    console.log(hikisu)

    hikisu.forEach((hikisu2) => { // 配列専用関数forEach => 中身を1つ1つ取り出して処理をしてくれる！

        console.log(hikisu2)
        console.log(hikisu2.name + 'なのだ！')
         alert(hikisu2.name + 'なのだ！！')
         // return
    })
}
console.log(greet(Robotama)) // greet関数の呼び出し！



let Robotama = [
    {name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}] },
    {name:'ロボ玉試作2号機', status:[{power:3000,defense:3000,speed:1000},{special:'ロボ玉バズーカー'}] },
    {name:'ロボ玉試作3号機', status:[{power:3000,defense:3000,speed:3000},{special:'ロボ玉ジャスティス！！'}] }
];
// <2>呼び出した時に、対象配列の中にある名前の一覧を作成したい！！

const nameList = Robotama.map(hikisu => hikisu.name) // mapメソッドを使って
console.log(nameList)

//map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。


//forEach()は処理結果を返さないのに対し、「map()メソッド」は指定した処理の結果を返す事になります。
//forEachは、ただ順々に中身を取り出して確認できるメソッド！
//処理結果を必要としない場合は、forEach、もしくはfor…ofを使用すると使い分けると良いと思います。


// <3>呼び出した時にnameにロボ玉のという文字列だけの配列を作る！ => 検索機能のロジック

let Robotama = [
    {name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000},{special:'ロボ玉ビーム'}] },
    {name:'ロボ玉試作2号機', status:[{power:3000,defense:3000,speed:1000},{special:'ロボ玉バズーカー'}] },
    {name:'ロボ玉試作3号機', status:[{power:3000,defense:3000,speed:3000},{special:'ロボ玉ジャスティス！！'}] },
    {name:'NeoRobotama', status:[{power:5000,defense:5000,speed:5000},{special:'ロボ玉・グランドクロス'}] },
    {name:'UnicornRobotama', status:[{power:5000,defense:5000,speed:5000},{special:'NTDR'}] }
];
const roboName = Robotama.filter(ailias => { // fileterで条件に合致するもので構成した配列を作成する！
    return ailias.name.match('ロボ玉') //String.prototype.match() => 文字列型の一致するものを返す！
})

console.log(roboName)

// <4> idの一致するものだけを取り出してくる！
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

let pirotId = RobotamaPirot.map(pirot =>  pirot.id) // idだけのリストを作成する！
console.log(pirotId) // [1, 2, 3, 4, 5]

const roboOperation = Robotama.filter(robo => { // idが一致するものだけの配列
    
    let idMatch = pirotId.find( id => id === robo.id) // idが一致するかどうかを一つ一つ確認する！
    console.log(idMatch) 
    // 1
    // 2
    // 3 と続いていく。 

    return robo.id === idMatch
})

console.log(roboOperation) // マッチする配列


// <5> idが一致する配列にpirotNameを結合したい。(4の続き！)

let mergeRoboArray = [] //入れ物用意
let roboArray = roboOperation.forEach(robo => {

    let idMatch = RobotamaPirot.find( pirot => pirot.id === robo.id) // idが一致するものを一つ格納！
    console.log(idMatch)
    
    const merged = {...robo,...idMatch}
    console.log(merged)

    
    mergeRoboArray.push(merged)
})
console.log(mergeRoboArray)



// ------------------------------------------------------------------------------------------------------------------------------------------------------
const nameList = (hikisu)=>{
    console.log(hikisu)
    hikisu.filter(hikisu2=>{
        console.log(hikisu2)
        hikisu2.key === 'name' 
    })
}
console.log(nameList(Robotama))


console.log(Search(Robotama))

const Search = (hikisu) => {
    
   return hikisu.forEach((hikisu) => { // filterで配列の中にある値を取り出して、matchするもので配列を再生成する！
    if(hikisu.name === 'ロボ玉試作1号機'){
        console.log('ロボ玉！！')
    }
 })
}

// callback関数内で絞込みたい条件を記載し、その条件に対し、結果がtrueの場合、新しい配列にpushするイメージになります。
// 結果が全てfalseの場合は、空配列が作成されます。



// return hikisu.name.match(this.search) //String.prototype.match() => 文字列型の一致するものを返す！

//       }

        