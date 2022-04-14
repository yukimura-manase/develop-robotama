// 5つのプリミティブ型を判定
// JavaScriptにおける型とは、数値(number)、文字列(string)、ブール値(boolean)、null、undefinedの5つのプリミティブ型を指します。
// これらはtypeof演算子を用いて判別する事が出来ます。ただし、nullだけは仕様に反して'object'を返します。

// typeof 演算子は、未評価のオペランドの型を示す文字列を返します。

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof miteigi); 
// expected output: "undefined"

// オブジェクトの[[Class]](設計図)を用いた判定
// プリミティブ型は判別できましたが、これでは様々なオブジェクト(Object、Array等)の判別は出来ません。
// しかし、「型」の判定をしたいと言う場合、実際にはArrayやObjectの区別をしたい場合が多いかと思います。
// そこで、Object.prototype.toStringを用いて、オブジェクトの[[Class]]内部プロパティを取得する方法がしばしばとられます。出力は、[object [[Class]]]という形式になります。

var toString = Object.prototype.toString

toString.call({});                // [object Object]  
toString.call([]);                // [object Array]
toString.call(function() {});    // [object Function]
toString.call(new Error());       // [object Error]
toString.call(new Date());        // [object Date]
toString.call(JSON);              // [object JSON]
toString.call(Math);              // [object Math]
toString.call(new RegExp());      // [object RegExp]
toString.call(new String('str')); // [object String]
toString.call(new Number(1));     // [object Number]
toString.call(new Boolean(true)); // [object Boolean]
// 最後の3つは、それぞれ文字列(string)、数値(number)、ブール値(boolean)のラッパーオブジェクトになります。
// ラッパーオブジェクトというのはstring, number, booleanの3つのプリミティブな値に対してメソッドを呼び出した際に、メソッド実行用に一時的に生成されるオブジェクトです。
// その為、コンストラクタを使わずにtoStringを呼び出す事が出来ます。


toString.call('str'); // [object String]
toString.call(1);     // [object Number]
toString.call(true);  // [object Boolean]
// また、ECMAScript5からは、nullやundefinedも[[Class]]を返すようになりました。

toString.call(null);      // [object Null]
toString.call(undefined); // [object Undefined]
// これで、標準コンストラクタで生成されたオブジェクトは判別出来る事が分かりました。


// <文字列型に変換するメソッド toString>
// num.toString()のようにして文字列でないものを文字列に変換できる
// ・日付の変換にはtoISOStringも使える
// ・Objectを文字列にするときにはJSON.stringifyメソッドを使う
// ・数値に対しては引数を指定して基数変換もできる

// toStringメソッドは、様々な値を文字列として扱いたいときによく使う基本的なメソッドなので、しっかりと理解しておきましょう！

// toStringメソッドとは
// toStringメソッドとは、「to（〜へ） + String（文字列）」、つまり「文字列へ変換」するときに使われるメソッドです。

// JavaScriptでは、あらゆる値が数値、文字列、配列などのデータ型に分かれています。

// toStringメソッドは、文字列でないものを文字列に変換するときに使われるメソッドです。



// <callメソッド>
// Function.prototype.call()
// call() メソッドは、 this の値と、独立して提供された引数によって関数を呼び出します。

//function.call(thisObj,args);


targetObject.function.call(thisObj,args);
//call( ) メソッドの概要
//call( ) は 指定した targetObject の function を thisObj の メソッドであるかのように呼び出すよ。

// ちょっと雑目に説明してみる。まずはコーディング形式から

// 呼ばれたいメソッドを持つオブジェクト.呼びたいメソッド.call(呼び出したいオブジェクト, 呼びたいメソッドに渡す引数);

// すっげーわかりにくいからもうちょっと雑にw

// あっちのオブジェクト.あっちのメソッド.call(こっちのオブジェクト, あっちのメソッドに渡す引数);

// 要するに、、、call( ) は他のオブジェクトが持つメソッドをさぞ自分のメソッドかのように呼び出すメソッド


// call( )は〇〇です！という説明よりも、実は何がしたいのか？なんの為に使っているのか？というのを読み解く事のほうが重要で、このメソッド自体の形式的な理解はさほど大変ではないよ


// < Boolean >
// Boolean()は引数に与えられた値を論理値 (true、false) に変換します。
// 値が0、null、false、NaN、undefined、空文字列の場合はfalseを返し、それ以外はtrueを返します。