let main_category = ['Women','Men','Kids','Baby'];

 main_category.forEach(function(e){
    console.log(e);
 });

 main_category.forEach(
    e => {
        console.log(e);
 });

 main_category.forEach(function(e, index, array){
    console.log(e + '=' + array[index]);
 });

 main_category.forEach((e, index, array) => {
        console.log(e + '=' + array[index]);
});




var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*var odd = number.find(function(e){
    if (e % 2 == 0 ){
        return true
    } else {
        return false
    }
});
console.log(odd);
*/

let odd = number.filter(
    e => e % 2 === 0);
console.log(odd);



let fruits = ['APPLE', 'STRAWBERRY', 'ORANGE', 'GRAPE'];
let item = fruits.find(e => e ==='ORANGE');
console.log(item);