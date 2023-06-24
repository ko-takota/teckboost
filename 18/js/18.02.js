// Ajaxを用いて外部にある商品データをJSON形式で読み込む

// let itemList = [];      // 商品一覧

// // 商品一覧をファイルから取得
// $(function () {
//     $.ajax({
//         url: '/json/item.json',
//         dataType: 'json'
//     })
//     .done(function (data) {
//         itemList = data;
//        // 大分類の生成
//         setMainMenu();
//     })
//     .fail(function () {
//         alert("ファイルが読み込めませんでした");
//     });
// });

let itemList = [];

let cate1 = [
    '---',                  // 未選択
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子ども家具'
  ];
  
  
let cate2 = [
    ['---'],
    ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
    ['ベッド','寝具','マットレス'],
    ['家具・ラック','収納システム'],
    ['子ども部屋家具','ベビー家具・ベビーグッズ']
];

let cate1Element = document.getElementById('mainMenu');
let cate2Element = document.getElementById('subMenu');
let itemListElement = document.getElementById('itemList');


function setMainMenu() {
    cate1Element.innerHTML = "";

    for (let i = 0; i < cate1.length; i++) {
        let option = document.createElement('option');
        option.value = cate1[i];
        option.text = cate1[i];
        cate1Element.appendChild(option);  
    }
}

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    cate2Element.innerHTML = "";

    for (let i = 0; i < cate2[idx].length; i++) {
        let option = document.createElement('option');
        option.value = cate2[idx][i];    
        option.text = cate2[idx][i];
        cate2Element.appendChild(option);       
    }
}

// 商品一覧をtableとして表示
function viewItemList(tag) {
    console.log(tag);
    let target = document.getElementById('itemList');

    target.innerHTML = "";

    if (tag !== undefined) {
        let html = "";
        html += "<table>";
        let count = 0;
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].tags.some(t => t === tag)) {
                if (count === 0) {
                  html += "<tr>";
                }

                // 商品情報
                html += "<td>";
                html += '<img src="img/item-sample.jpg" alt="商品の名前" width="180" height="123" />';
                html += '<p>商品名：&nbsp;' + itemList[i].name + '</p>';
                html += '<p>価格：&nbsp;&yen;' + itemList[i].price + '</p>';
                html += '<span><i class="fas fa-shopping-cart">ショッピングカート</i></span>';
                html += "</td>";

                if (count == 5)  {
                    html += "</tr>";
                    count = 0;
                } else {
                    count++;
                }
            }
        }
        if (count > 0) html += "</tr>";
        html += "</table>";
        target.innerHTML = html;
    }
}

//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
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

$(function() {
    $.ajax({
        url: 'json/item.json',
        dataType: 'json'
    })
    .done(function(data) {
        itemList = data;
        setMainMenu();
    })
    .fail(function(){
        alert('ファイルが読み込めませんでした');
    });
});