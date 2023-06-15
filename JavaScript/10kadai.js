//課題10

let APPLE = {
    color: 'red',
    lenght: 11.0,
    weight: 250
};

let ORANGE ={
    color: 'orange',
    lenght: 7.0,
    weight: 210
};

let GRAPE = {
    color: 'purple',
    lenght: 16.5,
    weight: 195
};

let fruits = [APPLE, ORANGE, GRAPE];
let totalweight = 0;


fruits.forEach( a => {
    totalweight += a.weight; //それそれの体重をtotalweightに足している
});
console.log('総重量は' + totalweight + 'gです') //forEach後のtotalweightを表示