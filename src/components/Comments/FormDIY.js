import React from 'react';
import {message} from 'antd';

const panelFormStyle = {
    fontSize: "16px",
    padding: "20px",
    color: "#155724",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    border: "1px solid #c3e6cb",
    overflow: 'hidden',
};

const inputStyle = {
    width: "100%",
    borderRadius: 5,
    padding: 2,
    border: "1px solid #c3e6cb",
    marginBottom: 10,
    paddingLeft: 10
};

const submitInput = {
    margin: "0 auto",
    width: 150,
    display: "block",
    padding: 2,
    marginTop: 20,
    color: "#155724",
    backgroundColor: "#c3e6cb",
    border: "1px solid #c3e6cb",
    borderRadius: 10,
    cursor: "pointer"
};

const textareaStyle = {
    width: "100%",
    padding: "5px 10px",
    borderRadius: 5,
    border: "1px solid #c3e6cb",
};

const warning = (text) => {
    message.warning(text);
};

class FormDIY extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.textarea = React.createRef();
    }

    handleSubmit = (event) => {
        let input = this.input.current.value;
        let textarea = this.textarea.current.value;
        if (!input.trim()) {
            warning("用户昵称不能为空");
        } else if (!textarea.trim()) {
            warning("留言内容不能为空")
        } else {
            //传递参数至回调函数更新，并清空留言框
            let comment = {
                author: input,
                description: textarea,
                timeStamp: +new Date()
            };
            this.props.submit(comment).then(() => {
                this.input.current.value = '';
                this.textarea.current.value = '';
                this.props.close([]);
            });
        }
        event.preventDefault();
    };

    render() {
        return (
            <form style={panelFormStyle}
                  onSubmit={this.handleSubmit}>
                <h4>用户留言：</h4>
                <input ref={this.input} style={inputStyle} placeholder={"@输入用户昵称"}/>
                <h4>留言内容：</h4>
                <textarea ref={this.textarea} style={textareaStyle} rows={4}/>
                <input type={"submit"} style={submitInput} value={"提交留言"}/>
            </form>
        )
    }
}

export default FormDIY;