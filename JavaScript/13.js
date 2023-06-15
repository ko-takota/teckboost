/*家具販売のサイト

作成する上で、ポイントとなるところは下記のとおりです。

商品のカテゴリを絞り込む（2段階のSELECTタグの操作）
絞り込まれた商品一覧の表示
商品カテゴリ、商品のデータの定義の仕方
*/

//大分類カテゴリのデータは、配列としてcate1に保管します
let cate1 = [
    ['-----'],
    ['家具'],
    ['ベット.マットレス'],
    ['収納家具.収納グッズ'],
    ['子供家具']
];

//次にselect文にoption要素を追加する関数を作成

// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');
//optionを追加する関数
function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによって空にする
    cate1Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    for(i = 0; i < cate1.length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        // optionの値に配列の値を代入
        option.value = cate1[i];
        // optionの表示文字列に配列の値を代入
        option.text = cate1[i];
        // select要素の子要素としてoption要素を追加
        cate1Element.appendChild(option);
    }
}

//--- プログラムの実行 ---
// 大分類の作成
setMainMenu();


// //子分類カテゴリのデータは、配列としてcate2に保管します
// let cate2 = [
//     ['---'],
//     ['ベット','ソファ','ラック','椅子.テーブル'],
//     ['ベット','寝具','マットレス'],
//     ['家具・ラック','収納システム'],
//     ['子ども部屋家具','ベビー家具・ベビーグッズ']
// ];


// //「家具」（つまり、cate1[1]）だったとした場合の小分類のselectを作成
// // 小分類のselectをid属性により取得
//case2Element = document.getElementById(subMenu);
// // 小分類のoptionを追加する関数
// function setMainMenu() {
//     // 取得したselectの子要素（option）を空白にすることによって空にする
//     case2Element.innerHTML = ' ';

//     // 大分類の配列に保存されている数だけoptionとして追加する
//     for (i = 0; i < cate2[1].length; i++) {
//         let option = document.createElement('option');  // option要素を新規に作成
//         option.value = cate2[1][i];    // optionの値に配列の値を代入
//         option.text = cate2[1][i];     // optionの表示文字列に配列の値を代入
//         cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加
//     }
// }
// // 小分類の作成
// setSubMenu();



//いま作成したsetSubMenuをどの大分類が選択されても動くように、引数に大分類で選択すれば番号を代入できるように書き換えます。

let cate2 = [
    // 未選択
    ['---'],
    // 家具のカテゴリ
    ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
    // ベッド・マットレスのカテゴリ
    ['ベッド','寝具','マットレス'],
    // 収納家具・収納グッズ'のカテゴリ
    ['家具・ラック','収納システム'],
    // 子ども家具
    ['子ども部屋家具','ベビー家具・ベビーグッズ']
];

let cate2Element = document.getElementById('subMenu');

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    // 取得したselectの子要素（option）を空白にすることによって空にする
    cate2Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate2[idx].length; i++) {
        let option = document.createElement('option');  // option要素を新規に作成
        option.value = cate2[idx][i];    // optionの値に配列の値を代入
        option.text = cate2[idx][i];     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加
    }
}

//--- プログラムの実行 ---
// 小分類の作成
//setSubMenu(1);




//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function(){
    // let idx = cate1Element.selectedIndex;
    // setSubMenu(idx);

    // 選択されれば番号を取得
    var idx = cate1Element.selectedValue;
    setSubMenu(idx);   // 大分類の選択に合わせて、小分類の生成
    viewItemList(cate2[idx][0]);   //　小分類が選択されたときに、最初に表示される値
});

cate2Element.addEventListener('change', function(){
    // let idx = cate2Element.selectedIndex;
    // let value = cate2Element.value;

    // console.log(idx);
    // console.log(value);

    // 選択されれば値を取得
    let val = cate2Element.value;
    viewItemList(val);
});

//--- プログラムの実行 ---
// 大分類の生成
setMainMenu();



//商品一覧の表示を作成
var itemlist = [
    { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0003', name: '子ども用ベッド', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'] },
    { id: '0004', name: 'ソファ', tags: ['ソファ'] },
    { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'] },
    { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'] },
    { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'] },
    { id: '0008', name: 'サイドテーブル', tags: ['テーブル・椅子'] },
    { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'] },
    { id: '0010', name: '子ども部屋用収納', tags: ['収納システム', '子ども部屋家具'] },
];                                        //プロパティにid（商品番号）とname（商品名）を持ったオブジェクトを商品データとして、配列でまとめました

var itemListElement = document.getElementById('itemList');

//　商品一覧の表示
function viewItemList(tag) {
    itemListElement.innerHTML = '';
    
    for (let i = 0; i < itemlist.length; i++) {
        if(itemlist[i].tags.some(t => t === tag)) {
          let li = document.createElement('li');  // li要素を作成
          let text = document.createTextNode(itemlist[i].id + ':' + itemlist[i].name);    // テキスト情報を作成
          li.appendChild(text);   // ul要素にテキスト情報を追加
          itemListElement.appendChild(li);
        }
    }
}
viewItemList();  // 商品一覧の表示

