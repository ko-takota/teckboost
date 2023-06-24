// 取得したデータをリスト化する関数
function htmlString(prefcode, address1, address2, address3, kana1, kana2) {
    let html = ''
    html += '<ul>';
    html += '<li>都道府県コード：' + prefcode + '</li>';
    html += '<li>都道府県：' + address1 + '</li>';
    html += '<li>市区町村：' + address2 + '</li>';
    html += '<li>町域：' + address3 + '</li>';
    html += '<li>都道府県(カナ)：' + kana1 + '</li>';
    html += '<li>市区町村(カナ)：' + kana1 + '</li>';
    html += '<li>町域(カナ)：' + kana1 + '</li>';
    html += '</ul>';
    return html;
  }
  
  $(function () {
    $('#search').click(function(event){
        // 入力された郵便番号を取得
        let param = {zipcode:$('#zipcode').val()}
  
        // AjaxによりWeb APIを呼び出す処理
        $.ajax({
            type: 'GET',                                    // GETで送信
            data: param,                                    // リクエストパラメーター
            url: 'https://zipcloud.ibsnet.co.jp/api/search', // URL
            dataType: 'jsonp',                              // データ型 JSONP
        })
        .done(function(res) {
            if (res.status == 200) {                    //　処理が成功したとき
                    //該当する住所を表示
                    let html = '';
                    for (let i = 0; i < res.results.length; i++) {
                      let r = res.results[i];
                      console.log(r);                   // 取得した値を確認
                      html += '<h3>住所' + (i + 1) + '</h3>';
                      html += htmlString(r.prefcode, r.address1, r.address2, r.address3, r.kana1, r.kana2);
                    }
                    $('#zip_result').html(html);
            } else {
                //エラーの場合
                $('#zip_result').html(res.message);
            }
  
        })
        .fail(function(res){
            $('#zip_result').html('通信エラー');
        });
    });
  });