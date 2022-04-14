// JavaScript問題集を解いてみる！ => https://gist.github.com/kenmori/1961ce0140dc3307a0e641c8dde6701d

// No.1 const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力
const a = { a: 'a' }
const b = { b: 'b' }

// pattern1
const c = Object.assign({},a,b)
console.log(c)

const a = { a: 'a' }
const b = { b: 'b' }

// pattern2
const c = {...a,...b}
console.log(c)

// No.2 dd,ee,ffを新たな配列として返してください
const arry = ['aa','bb','cc','dd','ee','ff','gg'];

// pattern1
const ddffgg = arry.filter(ar => {
    return ar.match('dd') || ar.match('ff') || ar.match('gg')
})
console.log(ddffgg)

// pattern2
const arry = ['aa','bb','cc','dd','ee','ff','gg'];
const ddffgg = arry.slice(3,-1)
console.log(ddffgg)

// No.3 ['a','b'] の要素をconsole出力
const array = ['a','b']
array.forEach(arry => {
    console.log(arry)
})

// No.4 ['a', 'b']の各要素にindex値を足した文字列を出力してください  ex)'a0'と'b1'

const array = ['a','b']
array.forEach( (arry,index) => {
    console.log(arry + index)
})

// No.5 任意の変数名の[1,2]を定義して配列かどうかを評価してください ex) true
const num = [1,2]
Array.isArray(num)

const num = [1,2]
typeof num

// No.8 keyとvalueを自身のプロパティのみ全て出力しなさい

const obj = {
    key: 'aa',
    key2: 'bb'
}
typeof obj