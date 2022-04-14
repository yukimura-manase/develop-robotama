// reduce => 減らす,削減する,引き締める,整理する =>まとめる・無駄を削ぎ落とすなどの意味合いでも使われる。
// reduceメソッド


// arrow アロー関数を利用した場合
const test = [10,20,30]
const sum = test.reduce((ruisekiValue, currentValue) => ruisekiValue + currentValue)
console.log(sum) // 60

// arrow 関数を利用しない場合
const test = [10,20,30]
const sum = test.reduce(function(previousValue, currentValue){
    return previousValue + currentValue
})
console.log(sum)

// コールバッグ関数を渡した場合
const test = [10,20,30]
const callback_func = (previousValue, currentValue) => previousValue + currentValue

const sum = test.reduce(callback_func)
console.log(sum) // 60

// 初期値を与えて配列の合計
//reduce()には初期値を与えることもできるので先程の例に初期値100を追加します。

const test = [10,20,30]

const sum = test.reduce(((previousValue, currentValue) => previousValue + currentValue),100)

console.log(sum) //160
 
// 配列.reduce(関数[, 初期値])