// JavaScriptの真偽判定まとめ

// 「!」は真偽結果を反転させる！！


// <各型, 値の評価一覧> => 各型, 値が条件式でどう評価されるのかを見てみましょう.
// value	type	result
// {}	オブジェクト	true
// "hoge"	文字列	true
// ""	文字	false
// 1	数値	true
// -1	数値	true
// 0	数値	false
// []	配列	true
// true	真偽値	true
// false	真偽値	false
// undefined	undefined	false
// null	null	false

// ポイントは、falseになる値！ => ""(空文字),0,false,undefined,nullの5つの場合のみfalseになる！

// 「!」はtrueとfalseの反転を起こす！

String
check('') // false
check('0') // true
// 空文字列はfalse
// 何か入っていればtrue

Number
check(1) // true
check(0) // false
check(-1) // true
//0はfalse、それ以外はtrue

Array
check([]) // true
check([].length) // false => lengthは0だからfalseになる！！
// 空のArrayでもtrueが返る。
// 空か否か判定する時はlengthを使う。

Object
check({name:false}) // true
check({}) // true
check(Object.keys({})) // true
check(Object.keys({}).length) // false => lengthは0だからfalseになる！！
// 空のobjectでもtrueが返る。
// 空か否か判定する時はObject.keys(obj).lengthとする。


// javascript オブジェクトが空であるか判定する方法
// javascriptで、オブジェクトの中が空であるかを判定するサンプルコードを記述してます。keyの長さと論理否定演算子「!」を利用して判定します。
