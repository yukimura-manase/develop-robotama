
// 多次元配列・オブジェクト

let userData = [
    ['Yamada', 28, 'Tokyo'],
    ['Suzuki', 35, 'Fukuoka'],
    ['Honda', 24, 'Sendai']
  ];

  console.log(userData[1][2]); // Fukuokaを参照する！

  console.log(userData[2][2]); // Sendaiにアクセス！

  let Robotama = [
      {name:'ロボ玉試作1号機', status:[{power:2000,defense:2000,speed:3000}] },
      {name:'ロボ玉試作2号機', status:[{power:3000,defense:3000,speed:1000}] },
      {name:'ロボ玉試作3号機', status:[{power:3000,defense:3000,speed:3000}] }
  ];

  // ロボ玉試作3号機のスピードを確認する！
  console.log(Robotama[2].status[0].speed);

  // スプレッド構文の練習をする！！
  let Robotama = [['NeoRobotama']];
  console.log(...Robotama);
  
  console.log(...Robotama[0])
  
  let Robotama2 = [[['NeoRobotama']]];
  console.log(...Robotama2);
  
  // スプレッド構文を複数回、使いたい場合はどうすればいいのか？






  // Items[ item1: { ID:1,  ・・・}  ]


  // 1つのカートの基本的なデータ構造
  let cart = {

    orderID:'',
    user:'',
    address:'',
    addressNumber:'',
    mail:'',
    orderDate:'',
    phoneNumber:'',
    status:0,

    Items:[
        { 
            ID:10,
            kazu:1,
            size:'M',
            totalPrice:627,
            topping:[topping.id]
        },
        { 
            ID:11,
            kazu:1,
            size:'M',
            totalPrice:627,
            topping:[topping.id]
            
        },
    ],
        
}
  

  

  