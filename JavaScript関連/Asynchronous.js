// 非同期処理の実験場

// 非同期処理の作成方法(手段)
// 関数をコールする(呼び出す)！ => コールバック(呼び返す！)

// XMLHTTP-reqest

// 1. コールバック関数(関数の引数として定義された関数)
// 2. Promiseオブジェクト
// 3. async / await

// 非同期処理は、２つの記述で構成される。
// ① 非同期で実行させたい処理を記述したコールバック関数(非同期関数)
// ② そのコールバック関数を「API」に登録して、非同期処理をスタートさせる


// < 非同期処理方法その１「コールバック関数編」>

const Robotama = ()=> {
    console.log('ロボ玉');
};


// < 非同期サンプル1 >
// ①1秒後に実行させたい処理
const hello = ()=> {
    console.log('ロボ玉');
};  

// ②Web APIs の setTimeout API に hello 関数を登録しタイマーをスタートさせる。
setTimeout(hello, 1000);


// < 非同期サンプル2 >
setTimeout( ()=> {
    console.log('ロボ玉');
},1000);


// < 非同期サンプル3 >
setTimeout(()=> {
    console.log('ロボ玉試作1号機');

    setTimeout(()=> {
        console.log('ロボ玉試作2号機');

        setTimeout(()=> {
            console.log('ロボ玉試作3号機');
        }, 3000);

    }, 2000);

}, 1000);


// < 非同期サンプル4 >
const func1 = ()=> {
    console.log('ロボ玉試作1号機');
    setTimeout(func2, 2000);
};
  
const func2 = ()=> {
    console.log('ロボ玉試作2号機');
    setTimeout(func3, 3000);
};
  
const func3 = ()=> {
    console.log('ロボ玉試作3号機');
};
  
setTimeout(func1, 1000);


// < 非同期処理方法その２「Promise・オブジェクト編」>

// 非同期処理は、２つの記述で構成される。
// ① 非同期で実行させたい処理を記述したコールバック関数(非同期関数)
// ② そのコールバック関数を「API」に登録して、非同期処理をスタートさせる

// Promise オブジェクトを使うとこれらの２つの記述を分離しながらも、
// １つのPromiseのインスタンスを通して関連付けられるため、非同期処理を連続させてもコールバック関数のネストが深くなったり、関数の宣言が散らばったりしない、という特徴をもっている。

// Promise オブジェクトも他の多くのビルトインオブジェクトと同様に関数オブジェクトであり、コンストラクター関数として new 演算子とともに使用する。

// < Promiseサンプル1 >
const promise = new Promise(); // エラー =>  Promise コンストラクターは引数に関数を渡す必要がある。
console.log(promise);



// 空っぽでも実行される！
console.log( new Promise( ()=> {

}));
// Promise {<pending>}
//[[Prototype]]: Promise
//[[PromiseState]]: "pending"
//[[PromiseResult]]: undefined





// < Promiseサンプル2 >
new Promise(function() {
    console.log('Hello Promise');
});
  

// < Promiseサンプル3 >
console.log('new 前');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

new Promise(function() {
    console.log('Hello Promise');
});

console.log('new 後');

// < Promiseオブジェクトの構文 >

// executor の第一引数は resolve、第二引数には reject という名前を与えるのが慣習になっている
new Promise(function(resolve, reject) {
    // インスタンス生成時に実行させる処理
});

// resolve は「解決する」、reject は「拒否する」という意味

// < Promiseインスタンスの２つのプロパティ >
// それでは executor が引数として受け取るこれら２つの関数 resolve, reject がどのような機能を持っているのかを調べてみよう！

// そのためにまず、new 演算子によるインスタンス化によって生成される Promise のインスタンスが、どの様なプロパティをもったオブジェクトなのかを見てみよう。

// この２つのプロパティ [[PromiseState]] と [[PromiseResult]] は、コードからは直接アクセスすることはできない、JavaScript エンジンが内部でのみ使用するプロパティとなっている。

// 生成されたPromiseが、pending(保留中・未決定)
new Promise((resolve, reject)=> {
    console.log('Promiseオブジェクトは、pending(保留中)の状態(ステート)！！');
});

// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined


// executor の第一引数 resolve の働き
new Promise((resolve, reject)=> {
    resolve();
});

// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

new Promise((resolve, reject)=> {
    reject();
});

// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: undefined

new Promise((resolve, reject)=> {
    resolve('ロボ玉');
});
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "ロボ玉" => resolveに渡した引数の値


// < Promiseサンプル >
let resolve2; // resolve関数を格納するための変数

const promise = new Promise((resolve, reject)=> {
    resolve2 = resolve;
});

// resolve関数を取り出して、外部で呼び出し！
resolve2('ロボ玉');
console.log(promise);
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "ロボ玉"

resolve2('ロボ玉World'); // 2回目は、無視される！
console.log(promise);
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "ロボ玉"


// 1.resolve 関数は任意のタイミングで呼び出すことができる。つまり resolve 関数を外部に取り出せば、インスタンスの生成後でも呼び出すことができる。

// 2.resolve 関数の呼び出しにより、生成されるインスタンスの２つの内部プロパティの値が変更される。
// その際、[[PromiseState]] が “fulfilled”（完了）、[[PromiseResult]] が resolve に渡した引数の値となる。

// 3.resolve 関数の呼び出しは１回だけ有効であり、２回目以降は無視される。


// < Promise インスタンスが意味するもの >
// 上記で Promise オブジェクトのインスタンスが２つの内部プロパティ [[PromiseState]], [[PromiseResult]] をもつこと、
//そしてこれらが executor関数 の引数で受け取る resolve, reject という関数を呼び出すことによって変更されることを確認した。

const promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, 1000);
  });
console.log(promise);




// then メソッド サンプル
let resolve2;
new Promise(function(resolve) {
  resolve2 = resolve;
})
.then(
  function(arg) {
    console.log('onFulfilled:', arg);
  },
  function(arg) {
    console.log('onRejected:', arg);
  }
);

resolve2('resolve value');  // onFulfilled: resolve value
resolve2('resolve value2'); // （何も表示されない）

// このサンプルから次のことが分かる。

// resolve 関数を実行すると、then メソッドの第一引数に渡した関数 onFulfilled が実行される。
// resolve 関数の引数に渡した値（ ‘resolve value’）は、onFulfilled の引数に渡ってくる。
// resolve 関数の２度目以降の呼び出しは無視される。

// したがって、「未来で実行させたい処理」は then メソッド第一引数（onFulfilled）に登録すればよい


// then メソッドの戻り値
// then メソッドの戻り値は新しい Promise インスタンス



// < 参照ドキュメント > 【JavaScript】Promise のメカニズムを理解する => https://hidekazu-blog.com/javascript-promise/



// < Promiseを使って非同期処理を制御しよう！！ >

new Promise((resolve, reject)=> {
    resolve('ロボ玉');
});
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "ロボ玉" => resolveに渡した引数の値


const promiseFunction = (resolve, reject)=> {
    resolve('ロボ玉');
};

const promise = new Promise(promiseFunction); // 非同期処理ファンクション

console.log(promise);

// Promise {<fulfilled>: 'ロボ玉'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "ロボ玉"






// < async / awaitの使い方を分析する！ >

// 1. async function() { } => 非同期関数の定義( awaitが使えるようになる！ )
// 2. await Promise処理 => 「 new Promise 」して「 await 」するプロミス処理を生成する！

// awaitは、Promiseの「 resolve 」を待っている！！

// わざと3秒の時間が掛かる処理を「 async / await 」で解決する！！

function myPromise(num) { // ⓪ Promiseを渡す関数

    return new Promise( (resolve, reject)=> { // ① new Promiseで非同期関数を定義

        setTimeout( ()=> { resolve(num * num) }, 3000); // ② resolve関数を呼び出す！(非同期処理で実行する処理！)
    });

};

async function myAsync() { // ④ 非同期関数を定義
 
    const result = await myPromise(10); // ⑤ 非同期処理の結果を待ってもらいたい処理に「 await 」を記述

    console.log(result);
 
};
 
myAsync();





// < 参照ドキュメント > 【JavaScript入門】5分で理解！async / awaitの使い方と非同期処理の書き方 => https://www.sejuku.net/blog/69618