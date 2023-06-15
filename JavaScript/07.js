
let week2 = {sun:'日',mon:'月',tue:'火',wen:'水',thu:'木',fri:'金',sat:'土'};
console.log(week2);
console.log(week2['sun']);
console.log(week2.sun);


let week = {sun:'日',mon:'月'};
week['wen'] = '水';
week.tue = '火';
console.log(week);


let week3 = {sun:'日', mon:'月', tue:'火', wed:'水'};
delete week3['mon'];
delete week3.tue;
console.log(week3);



var week4 = {sun:'日', mon:'月', tue:'火', wed:'水', thu:'木', fri:'金', sat:'土'};
for (key in week4) {
    console.log(key);
}
let keys = Object.keys(week4);
console.log(keys)

for (key in week4){
    console.log(week4[key])
};
let values = Object.values(week4);
console.log(values);



let week5 = {thu:'木',fri:'金'};
let week6 = {sun:'日', mon:'月', tue:'火', wed:'水'};

let week7 = Object.assign(week5,week6);
console.log(week7);