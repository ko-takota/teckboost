//課題09

let a = [];

for (let i = 1; i <= 100; i++) {
  a.push(i);
}

let b3 =a.filter( a => a % 3 === 0);
console.log(b3);

let b5 =a.filter( a => a % 5 === 0);
console.log(b5);