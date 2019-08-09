import * as React from "react";
import ReactDOM from "react-dom";
import './test.css'
//体会css选择器 ~ 的用法

class Css_test extends React.Component{
    render() {
        return (
            <div className={'demo'}>
                <ul>
                    <li className={'circle'}/>
                    <li className={'circle'}/>
                    <li className={'circle'}/>
                    <li className={'circle'}/>
                    <li className={'circle'}/>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    // eslint-disable-next-line react/jsx-pascal-case
    <Css_test/>,
    document.getElementById('css_test')
);

export default Css_test;