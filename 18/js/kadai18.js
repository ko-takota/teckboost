
let itemList = [];
let cate1 = [];
let cate2 = [];

$(function () {
    $.ajax({
        url: 'json/item2.json',
        dataType: 'json'
    })
    .done(function (data) {
        cate1 = data.cate1;
        cate2 = data.cate2;
        itemList = data.items;
        setMainMenu(); 
    })
    .fail(function () {
        alert("ファイルが読み込めませんでした");
    });
});

let cate1Element = document.getElementById('mainMenu');

let cate2Element = document.getElementById('subMenu');

let itemListElement = document.getElementById('itemList');

function setMainMenu() {
    console.log(itemList);
    cate1Element.innerHTML = "";

    for (let i = 0; i < cate1.length; i++) {
        let option = document.createElement('option');
        option.value = cate1[i];
        option.text = cate1[i];
        cate1Element.appendChild(option);
    }
}

function setSubMenu(idx) {
    cate2Element.innerHTML = "";

    for (let i = 0; i < cate2[idx].cate.length; i++) {
        let option = document.createElement('option');
        option.value = cate2[idx].cate[i]; 
        option.text = cate2[idx].cate[i]; 
        cate2Element.appendChild(option);      
    }
}

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
cate1Element.addEventListener('change', function(){
    let idx = cate1Element.selectedIndex;
    setSubMenu(idx);
    viewItemList(cate2[idx][0]);
});

cate2Element.addEventListener('change', function(){
    let val = cate2Element.value;
    console.log("val:" + val);
    viewItemList(val);
});