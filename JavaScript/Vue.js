let app = new Vue({
    el: '#app',
    data: {
      msg: 'おはよう',
      msg1: 'いい天気ですね!'
    },
    methods: {                  
      msgChange: function () {
        this.msg = 'こんばんわ';
        this.msg1 = 'お元気ですか？';
      }
    }
  });

//   コンポーネントの例
Vue.component(
    'msg-comp',
    {
        template: '<div>おはよう</div>'
    },
)
let app = new Vue({
    el: '#app'
});


// v-htmlの例
let app = new Vue({
    el: '#app', 
    data: { msg: '<p>おはよう</p>' }
  });

// v-forの例
  let app = new Vue({
    el: '#app',
    data: {
      msgs1: ["おはよう", "こんばんは", "お元気ですか"],
      msgs2: [
        { jp: "おはよう", eng: "good morning" },
        { jp: "こんばんは", eng: "good evening" },
        { jp: "お元気ですか", eng: "How are you doing?" }]
    }
  });