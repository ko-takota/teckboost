//08課題
//関数名あり（p1 = 底辺 , p2 =高さ）
function tri(p1, p2){
let p =(p1 * p2) / 2;
return p;
}
console.log(tri(10, 20));

//関数名なし（p1= 底辺 , p2= 高さ）
let tritotal = [];

tritotal[0] = function(p1, p2) {
  let p = (p1 * p2) / 2;
  return p;
};

console.log(tritotal[0](10, 20));