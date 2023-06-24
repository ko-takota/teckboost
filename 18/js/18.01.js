//Ajaxを使わない場合のJavaScript

// 主な機能
// 大分類を選択すると小分類が切り替わる
// 小分類を選択すると対応する商品一覧を表示する
// 商品一覧は、tableタグで表示する（変更点）

const itemList = [
    {'id':'0001', 'name':'ソファベッド', 'price':50000, 'tags':['家具','ベッド','ソファ','寝具']},
    {'id':'0002', 'name':'シングルベッド','price':30000, 'tags':['家具','ベッド','寝具']},
    {'id':'0003', 'name':'子ども用ベッド','price':20000, 'tags':['家具','ベッド','寝具','子ども部屋家具']},
    {'id':'0001', 'name':'ソファ','price':10000, 'tags':['家具','ソファ']},
    {'id':'0002', 'name':'キューブボックス','price':4000, 'tags':['家具','家具・ラック','収納システム']},
    {'id':'0003', 'name':'オープンラック','price':5000, 'tags':['家具','家具・ラック','収納システム']},
    {'id':'0007', 'name':'コンピュータデスク','price':55000, 'tags':['家具','テーブル・椅子']},
    {'id':'0008', 'name':'サイドテーブル','price':4000, 'tags':['家具','テーブル・椅子']},
    {'id':'0009', 'name':'ダイニングテーブル','price':4000, 'tags':['家具','テーブル・椅子']},
    {'id':'0010', 'name':'子ども部屋用収納','price':35000, 'tags':['家具','収納システム', '子ども部屋家具']}
];

const cate1 = [
  '----',
  '家具',
  'ベッド｜マットレス',
  '収納家具｜収納グッズ',
  '子ども家具',
];

const cate2 = [
  ['----'],
  ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
  ['ベッド','寝具','マットレス'],
  ['家具・ラック','収納システム'],
  ['子ども部屋家具','ベビー家具・ベビーグッズ']
];

let cate1Element = document.getElementById('mainMenu');
let cate2Element = document.getElementById('subMenu');
let itemListElement = document.getElementById('itemList');

function setMainMenu() {
    cate1Element.innerHTML = '';
    for(let i =0; i < cate1.length; i++) {
        let option = document.createElement('option');
        option.value = cate1[i];
        option.text = cate1[i];
        cate1Element.appendChild(option);
    }
}

function setSubMenu(idx) {
    cate2Element.innerHTML = '';
    for(let i =0; i < cate2[idx].length; i++) {
        let option = document.createElement('option');
        option.value = cate2[idx][i];
        option.text = cate2[idx][i];
        cate2Element.appendChild(option);
    }
}

// 商品一覧をtableとして表示
function viewItemList(tag) {
    let target = document.getElementById('itemList');
    target.innerHTML = '';
    if (tag !== undefined) {
        let html = '';
        html += '<table>';
        let count = 0;
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].tags.some(t => t === tag)) {
                if (count === 0) {
                    html += '<tr>';
                }
                
                // 商品情報
                html += '<td>';
                html += '<img src="img/item-sample.jpg" alt="' + itemList[i].name + '" width="180" height="123" />';
                html += '<p>商品名：&nbsp;' + itemList[i].name + '</p>';
                html += '<p>価格：&nbsp;&yen;' + itemList[i].price + '</p>';
                html += '<span><i class="fas fa-shopping-cart">ショッピングカート</i></span>';
                html += '</td>';

                if (count === 5) {
                    html += '</tr>';
                    count = 0;
                } else {
                    count++;
                }
            }
        }
        if (count > 0) html += '</tr>';
        html += '</table>';
        target.innerHTML = html;
    }
}

//--- イベントリスナーの定義 ---
cate1Element.addEventListener('change', function(){
    let idx = cate1Element.selectedIndex;
    setSubMenu(idx);
    viewItemList(cate2[idx][0]);
});
// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function(){
    let val = cate2Element.value;
    viewItemList(val);
});

setMainMenu();



