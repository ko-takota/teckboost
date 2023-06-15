/*
function clickButton() {
    alart('ボタンが押されました。');
}

function clickButton() {
    let target = document.getElementById('btn01');
    let parent = target.parentNode;
    // spanタグ(id属性の値msg)の要素を取得
    let span = document.getElementById('msg');
    if (span == null) { //　spanタグがなければ、追加する
        let newSpan = document.createElement('span');
        // spanタグの要素にid属性で値msgを追加
        newSpan.setAttribute('id', 'msg');
        let newText = document.createTextNode('ボタンが押されました');
        newSpan.append(newText);
        parent.insertBefore(newSpan, target.netSibling);                
    }
}

function clickButton() {
    let span = document.getElementById('msg');
    span.classList.remove('hidden');
}
*/

let target = document.getElementById('btn01');

target.addEventListener('click',function() {
    let span = document.getElementById(msg);
    span.classList.remove('hedden');
})