//課題14
// 次のプログラムは、変数iが未定義のため、実行中でエラーが発生します。
// このプログラムを例外処理try...catchを利用してエラーが発生しないように書き直してみましょう。

// var a = [1,2,3];

// console.log(a[i]);    



try{
    var a = [1,2,3];
    console.log(a[i])
} catch (e){
    console.log('エラーです')
}