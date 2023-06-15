//組み込み関数
let str = '12345';
console.log(str + ':' + typeof(str));

let n = parseInt(str);
console.log(n + ':' + typeof(n));



let str1 = '123.45';
console.log(str1 + ':' + typeof(str1));

let a = parseFloat(str1);
console.log(a + ':' + typeof(a));

let b = parseInt(str1);
console.log(b + ':' + typeof(b));



let str2 = '一二三四五';
console.log(str2 + ':' + typeof(str2));

let c = parseInt(str2);
console.log(c + ':' + typeof(c));


//ユーザー定義関数
function add(p1, p2){
let p = p1 + p2;
return p;
}
console.log(add(10, 20));

/*名前のない関数　
変数に代入して使う*/
var add = function(p3, p4){
    p = p3 + p4;
    return p;
}
console.log(add(1, 2));



let ops = [];
ops[0] = function(p1, p2) {
    let p = p1 + p2;
    return p;
}
ops[1] = function(p1, p2) {
    let p = p1 / p2;
    return p;
}
ops[2] = function(p1, p2) {
    let p = p1 * p2;
    return p;
}
// 関数の実行
for (let i = 0; i < ops.length; i++) {
    console.log(ops[i](10, 20));
}