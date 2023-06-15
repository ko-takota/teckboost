/*

let taro = {       
    name: 'taro',
    height: 175.0,
    weight: 72,
    blood_type: 'A',

    introduct() {       
        return this.name + 'です。身長は' + this.height + "cmです。";
    }
};
console.log(taro.introduct());

let jiro = {        
    name: 'jiro',
    height: 178.0,
    weight: 76,
    blood_type: 'B'
};

let saburo = {      
    name: 'saburo',
    height: 165.0,
    weight: 68,
    blood_type: 'O'
};

// 三つオブジェクトを配列に保存
let brother = [taro, jiro, saburo];


function calc_bmi(height,weight) {
    let bmi = weight / ((height * 0.01)*(height * 0.01));
    return bmi
}

brother.forEach(e => {
    let bmi = calc_bmi(e.height, e.weight);
    console.log(e.name + 'bmi' + Math.round(bmi * 100) / 100);
}); 






let car = {                    // carオブジェクト
    distance_per: 60.0,        // プロパティ 1時間辺りの走行距離

    distance(t) {              // メソッド 走行距離を計算する関数
        return this.distance_per * t;
    }
};

let bicycle = {                // bicycleブジェクト
    distance_per: 15.0,        // プロパティ 1時間辺りの走行距離

    distance(time) {           // メソッド 走行距離を計算する関数
        return this.distance_per * time;
    }
};

let taro = {
    name:"taro",        // 名前
    mobile:null,        // 乗っている乗り物

    rade(m) {           // 乗り物にのる
        this.mobile = m;
    },

    drive(t) {          // 乗り物にのって運転して移動した距離
        return this.mobile.distance(t);
    }
}

// オブジェクトを使ったプログラム
// ① taroがcarに乗った
taro.rade(car);
console.log(taro);

// ② taroは車に乗って、2時間移動した。その時の走行距離
console.log(taro.drive(2));

// ③ taroは自転車に乗り換えた
taro.rade(bicycle);
console.log(taro);

// ④ taroは自転車に乗って、2時間移動した。その時の走行距離
console.log(taro.drive(2));






let o1 = { name: 'o1です', p: 1 }   // ①オブジェクトo1
let o2 = { name: 'o2です', p: 2 }   // ②オブジェクトo2

console.log(o1);
console.log(o2);

o2 = o1;        // ③ o2にオブジェクトo1の記憶場所を代入

console.log(o1);
console.log(o2);    // ④o2の内容を出力

o2.p = 3;       // ⑤o2のプロパティpに3を代入

console.log(o1);
console.log(o2);
*/

let o1 = { a: 1 }

// オブジェクト型を引数とした関数を定義
function ref(x) {
    x.a = 3;    //　引数に3を代入
    console.log('関数の中 :' + x.a);
}

console.log('関数の前 :' + o1.a);
ref(o1);
console.log('関数の後 :' + o1.a);

