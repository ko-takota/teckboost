let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

console.log(e1.tagName);    //　タグ名を取得
console.log(e2.id);         //　id属性の値を取得
e2.id = 'p4';               //　id属性の値を変更
console.log(e3.className);   //　class属性の値を取得
console.log(e2.id);