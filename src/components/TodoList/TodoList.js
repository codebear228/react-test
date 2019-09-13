import * as React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInfo: ['react', 'vue', 'angluar']
        };
        this.submitMsg = this.submitMsg.bind(this);
    }

    submitMsg(text) {
        let {textInfo} = this.state;
        textInfo.unshift(text);
        this.setState({
            textInfo: textInfo
        })
    }

    render() {
        return (
            <div>
                <h2>Simple TodoList</h2>
                <TodeAdd onSubmit={this.submitMsg}/>
                <TodoList textInfo={this.state.textInfo}/>
            </div>
        )
    }
}

class TodeAdd extends React.Component {
    constructor(props) {
        super(props);
        this.saveMsg = this.saveMsg.bind(this);
    }

    saveMsg() {
        //收集数据之后，向父组件传递数据
        let text = this.refs.input.value;
        if (text) {
            this.props.onSubmit(text);
        } else {
            alert("请输入内容...")
        }
    }

    render() {
        return (
            <div>
                <input ref={"input"} type={"text"} placeholder={"请输入..."}/>
                <button onClick={this.saveMsg}>保存</button>
            </div>
        )
    }
}

//工厂函数模式，无状态函数模式
function TodoList(props) {
    return (
        <ul>
            {props.textInfo.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('test1')
);

export default TodoList;