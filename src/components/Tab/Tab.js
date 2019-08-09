import * as React from "react";
import ReactDOM from "react-dom";
import './tab.css'

class TabContext {
    constructor(title, text) {
        this.title = title;
        this.text = text;

    }
}

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.defaultContext = new TabContext('测试1', '测试1');
        this.state = {
            tabContext: [],
            tabIndex: 0,
            tabNum: 0
        };

        this.addTab = this.addTab.bind(this);
        this.deleteTab = this.deleteTab.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    componentWillMount() {
        this.setState({
            tabContext: [this.defaultContext],
            tabIndex: 1,
            tabNum: 1
        });
    }

    addTab() {
        let tabIndex = this.state.tabIndex;
        tabIndex++;
        let newTabNum = this.state.tabNum;
        let tabContext = this.state.tabContext;
        tabContext.push({title: '测试' + tabIndex, text: '测试' + tabIndex});
        this.setState({
                tabContext: tabContext,
                tabIndex: tabIndex,
                tabNum: ++newTabNum,
            }, () => {
                //这里可以用回调打印最新的state值
                console.log(this.state);
            }
        );
    }

    deleteTab(index) {
        let tabContext = this.state.tabContext;
        tabContext.splice(index, 1);
        let tabNum = this.state.tabNum;
        this.setState({
                tabContext: tabContext,
                tabNum: --tabNum,
            }
        );
    }

    changeInput(index, e) {
        if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像
            let tabItem = this.state.tabContext;
            tabItem[index].title = e.target.value;
            this.setState(
                {
                    tabContext: tabItem
                }
            )
        }
    }

    render() {

        let deleteTab = this.deleteTab;
        let changeInput = this.changeInput;

        function TabContext(props) {
            return (
                <div className={'tabBox'}>
                    <div style={{display: 'inline-block', lineHeight: '50px'}}>
                        <input className={'tabInput'} defaultValue={props.item.title}
                               onKeyPress={changeInput.bind(this, props.index)}/>
                    </div>
                    <span className={'close'} onClick={deleteTab.bind(this, props.index)}>×</span>
                </div>
            )
        }

        return (
            <div className={'tab'}>
                <h3 className={'tabTitle'}>JS 面向对象 动态添加标签页</h3>
                <div className={'tabContent'}>
                    <div className={'contentTop'}>
                        {this.state.tabContext.map((item, index) => {
                            return <TabContext item={item} index={index} key={index}/>
                        })}
                        <div className={'addButtonContent'}>
                            <input type="button" value={'+'} className={'addButton'} onClick={this.addTab} readOnly/>
                        </div>
                    </div>
                    <div style={{padding: '10px'}}>
                        <textarea className={'textArea'} value={this.state.tabContext[0].text} readOnly/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Tab/>,
    document.getElementById('tab')
);

export default Tab;