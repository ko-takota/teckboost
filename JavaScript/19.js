class MessageH1 extends React.Component {
  constructor() {
    super();
  }

  render() {
    let newElement = React.createElement(
      "h1",
      null,
      "おはよう"
    );
    return newElement;
  }
}

class OKButton extends React.Component {
  constructor(props) {
    super(props);
      this.state = {ok: false };
    }

    render() {
      if(this.state.ok) {
        return "OKが押されました(" + this.state.ok + ")";
      }
      return React.createElement(
        "button",
        { onClick: () => this.setState({ ok: true}) },
      );
    }

  }


class CountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count : 0 };
  }

  render() {
    return React.createElement(
      "button",
      { onClick:() => this.setState({ count : this.state.count + 1 })},
      "カウント数：" + this.state.count
    );
  }
}

const domContainer1 = document.querySelector("#app1");
const domContainer2 = document.querySelector("#app2");
const domContainer3 = document.querySelector("#app3");
const domContainer4 = document.querySelector("#app4");


ReactDOM.render(
  React.createElement(MessageH1),
  domContainer1
);

ReactDOM.render(
  React.createElement(OKButton),
  domContainer2
);

ReactDOM.render(
  React.createElement(CountButton),
  domContainer3
);

ReactDOM.render(
  React.createElement(CountButton),
  domContainer4
);