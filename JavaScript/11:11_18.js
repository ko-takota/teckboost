//課題11
//1
let e1 = document.getElementsByTagName('p1');
e1.tagName = 'input';

console.log(e1.tagName);

//2
let e2 = document.getElementById('p2');
e2.innerText = 'テキスト文字列';

//3
let e3 = document.getElementById('p3');
e3.id = 'p5';
console.log(e3.id);