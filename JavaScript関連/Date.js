

let today = new Date(); // 現在時刻の取得
console.log(today);

console.log(Date.parse(today)); // Date.parseによってDate文字列から数値に変換する！
console.log(Number(today)); // Numberでも同じようなことはできる！ しかし、微妙に違いが出る！

console.log(today.toString()); // Date文字列に変換する！
console.log(today.toUTCString());
console.log(today.toISOString());

let today2 = new Date( // 「年・月・日・時間」までの日付情報(文字列)を生成する！
    today.getFullYear(), //年
    today.getMonth(), //月
    today.getDate(), //日
    today.getHours(), //時間
);
console.log(today2);


// Date.parse() => https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse

let today3 = new Date().toString();
console.log(today3);
console.log(Date.parse(today3)); // 数値化できる！
console.log(Number(today3)); // NaNになってしまう！

let today5 = new Date().toISOString();
console.log(today5);
console.log(Date.parse(today5)); // 数値化できる！
console.log(Number(today5)); // NaNになってしまう！

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 計算する時は、数値化して計算する => 
// 文字表示するときは、文字列化するなどして表示する！

let today = new Date(); // Dateオブジェクトを生成
console.log(today);
//console.log(typeof now);

let order = new Date(
    today.getFullYear(), //年
    today.getMonth(), //月
    today.getDate(), //日
    today.getHours(), //時間
);
console.log(order);

let numberNow = Number(now);
//console.log(numberNow);
// console.log(typeof numberNow);
// console.log(numberNow.toString());

let parseNow = Date.parse(now);
//console.log(parseNow);
// console.log(typeof parseNow);
// console.log(parseNow.toString());

let stringNow = now.toString();
console.log(stringNow);
//console.log(typeof stringNow);
//console.log(Date.parse(stringNow));
//console.log(Number(stringNow)); // NaNになってしまう！

let NumberNow = Date.parse(stringNow);
console.log(NumberNow);

let ReStringNow = NumberNow.toString();
console.log(ReStringNow);


console.log('Dateオブジェクトの生成');
console.log(new Date(now));
console.log(new Date(stringNow)); // 文字列データも日付変換できる！
console.log(typeof new Date(stringNow));
console.log(new Date(NumberNow)); // 数値データも日付変換できる！
console.log(new Date(ReStringNow));
console.log(typeof new Date(ReStringNow));


var today = new Date();
  console.log(today.getFullYear() + "/" +  today.getMonth() + 1 + "/"+ today.getDate()  + "/" + today.getDay());


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let today = new Date()//今日の日付

today = new Date(
    today.getFullYear(), //年
    today.getMonth(), //月
    today.getDate(), //日
    today.getDay(), //曜日
    today.getHours(), //時間
);
console.log(today);
console.log(typeof today);

let month = today.getMonth();
console.log(month);
console.log(typeof month);

let day = today.getDay();
console.log(day);
console.log(typeof day);

console.log(today.getFullYear() + "/" +  today.getMonth() + 1 + "/"+ today.getDate()  + "/" + today.getDay());

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let today = new Date();//今日の日付

let orderDate = `${today.getFullYear()}年 ${today.getMonth() + 1}月 ${today.getDate()}日 ${today.getHours()}:${today.getMinutes()}に注文！ `;
console.log(orderDate);
console.log(typeof orderDate);

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

const dayOfWeek = ['(日)','(月)','(火)','(水)','(木)','(金)','(土)'];

let now = new Date();
console.log(now);

const zeroCheck = (num)=> {
    console.log(num);
    if(num <= 10 ){
        console.log('ゼロチェック！');
        return 0 + num;
    }else {
        return num;
    };
};

let stringNow = `${now.getFullYear()}年 ${now.getMonth() + 1}月 ${now.getDate()}日 ${ dayOfWeek[now.getDay()] } ${ now.getHours() }時 ${ zeroCheck( now.getMinutes() ) }分`;
console.log(stringNow); // 2021年 11月 18日 (木) 14時 24分






// JavaScriptでDateオブジェクトを使って日付を表示する方法【初心者向け】
// https://techacademy.jp/magazine/5587#sec8