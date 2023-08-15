class CountButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 100};
    }

    render() {
        let count = this.state.count -1;
        if (count < 0) {
            count = 100;
        }
        return React.createElement(
            "button",
            { onClick:() => this.setState({ count: count})},
            "カウント数：" + this.state.count
        );
    }
}

const domContainer = document.querySelector("#app");

ReactDOM.render(
    React.createElement(CountButton),
    domContainer
);

