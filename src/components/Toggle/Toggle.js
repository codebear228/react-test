import * as React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Toggle extends React.Component {
    constructor(props) {
        super(props);  //继承了React.Component里面的构造函数里的属性
        //super也可以调用父类的函数方法；和this调用的区别是，如果子类重写了父类的方法，
        // 则this调用的是子类重写后的方法，而super调用的是父类的方法
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
                isToggleOn: !this.state.isToggleOn
            }
        )
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'on' : 'OFF'}
            </button>
        )
    }
}

class ReactTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['toms', 'jack', 'alan']
        }
    }

    render() {
        return (
            <ul>
                {
                    this.state.names.map((item, index) => {
                        return <li key={index}>索引号{index}的数组值为{item}</li>

                    })
                }
            </ul>
        )
    }
}


class Person extends React.Component {
    render() {
        return (
            <ul>
                <li>姓名：{this.props.username}</li>
                <li>性别：{this.props.sex}</li>
                <li>年龄：{this.props.age}</li>
            </ul>
        )
    }
}

Person.propTypes = {
    sex: PropTypes.string
};

Person.defaultProps = {
    sex : '默认男'
};

let person = {username: 'kobe', age: 39, sex: '男'};

ReactDOM.render(
    <Person username={person.username} age={person.age} sex={person.sex}/>,
    document.getElementById('root3')
);

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root2')
);

export default Toggle;