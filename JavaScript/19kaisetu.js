//MessageH1という名前の新しいコンポーネントを作成します。
//React.Componentを継承することで、Reactコンポーネントの機能を利用できます。
class MessageH1 extends React.Component { 

    // コンストラクター（Constructor）関数は、クラスがインスタンス化（オブジェクトを生成）されたときに自動的に呼び出される特殊な関数です。
    // super()を呼び出して親クラス（React.Component）のコンストラクターを実行します。
    // この例では、特にコンストラクターで何も行っていません。
    constructor() {
      super();
    }
  
    //render()メソッドは、Reactコンポーネントが描画（レンダリング[reactがコンポーネントを呼び出すこと]）されるときに呼び出される関数です。
    //このメソッド内で、コンポーネントの出力内容を定義します。
    render() {

        // React.createElement()は、React要素（element）を作成するための関数です。
        // 新しいReact要素を作成するために使用されます。
        // 引数には、要素のタグ名、プロパティ（props）、および子要素の値を指定します。
      let newElement = React.createElement(
        // コードは、<h1>おはよう</h1>という新しいReact要素を作成しています。
        // "h1"は要素のタグ名です。
        // nullは要素のプロパティ（props）を指定する場合に使用されますが、この例ではプロパティは指定していません。
        // "おはよう"は要素の子要素の値です。
        "h1",       // タグ名
        null,       // props（パラメーターの集合）
        "おはよう"   // 子の値
      );

    //   render()メソッドは、コンポーネントの出力内容を返す必要があります。
    //   この例では、作成した新しいReact要素を返しています。
    //   newElementは<h1>おはよう</h1>を表すReact要素です。
      return newElement;
    }
  }


//   document.querySelector("#app")は、HTML内のidがappである要素を取得するためのJavaScriptのメソッドです。
//   取得した要素は、domContainerという変数に格納されます。
//   domContainerは、Reactコンポーネントを表示するためのコンテナー要素を参照します。
  const domContainer = document.querySelector("#app");

//   ReactDOM.render()は、Reactコンポーネントを実際のDOMに描画するためのメソッドです。
//   このメソッドは、第1引数に描画するReact要素またはコンポーネントを受け取ります。
//   第2引数には、描画先となるDOM要素を指定します。
  ReactDOM.render(

    // React.createElement()は、React要素を作成するための関数です（前回の説明と同じです）。
    // この例では、MessageH1というReactコンポーネントを作成しています。
    React.createElement(MessageH1),

    // domContainerは、Reactコンポーネントを表示するためのコンテナー要素を参照しています。
    // ReactDOM.render()メソッドは、第2引数として渡されたDOM要素内にReactコンポーネントを描画します。
    domContainer
  );