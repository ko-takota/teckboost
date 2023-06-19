// // try {
// //     例外が起こる可能性のある処理
// // } catch (変数名) {
// //     例外が起きたときの処理
// // } finally {
// //     例外が起きても起きなくても行う処理
// // }


// let item;

// try {
//     console.log(item.price);
// } catch (e) {
//     console.log(e);
// }
// console.log('end');


// //意図的にエラーを発生させる
// //throw new Error(エラーメッセージ)  

// //下記のプログラムは、割り算処理で0を割ろうとした場合に、例外を発生させる場合のプログラムです。

// let a = 10;
// let b = 0;
// let c;

try {
    if (b === 0) {
        throw new Error('0で割ろうとしています');
    }
    c = a / b;
} catch (e) {
    console.log(e.message);
} finally {
    c = 0;
}
console.log(c);


// try {
//     throw new SyntaxError();
// } catch (e) {
//     if (e instanceof SyntaxError) {
//         console.log('例外 SyntaxError');
//     } else if (e instanceof Error) {
//         console.log('例外 Error');
//     }
// }


// try {
//     let random = Math.floor(Math.random() * 5);
//     console.log(random);
//     switch (random) {
//         case 0:
//             throw new Error();
//         case 1:
//             throw new SyntaxError();
//         case 2:
//             throw new TypeError();
//         case 3:
//             throw new RangeError();
//         case 4:
//             throw new URIError();
//     }
// } catch (e) {
//     if (e instanceof SyntaxError) {
//         console.log('例外 SyntaxError');
//     } else if (e instanceof TypeError) {
//         console.log('例外 TypeError');
//     } else if (e instanceof RangeError) {
//         console.log('例外 RangeError');
//     } else if (e instanceof URIError) {
//         console.log('例外 URIError');
//     } else if (e instanceof Error) {
//         console.log('例外 Error');
//     }
// }