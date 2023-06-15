//課題07

let fruit = {apple:'りんご',strawberry:'いちご',grape:'ぶどう',lemon:'れもん'};

console.log(fruit.grape);

for (key in fruit) {
    console.log(key);
}

let keys = Object.keys(fruit);
console.log(keys);

for (key in fruit) {
    console.log(fruit[key])
};

let values = Object.values(fruit);
console.log(values);