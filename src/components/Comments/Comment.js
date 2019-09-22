import {message, Popconfirm} from "antd";
import * as React from "react";

function Comment(props) {
    let date = new Date(props.timeStamp);
    let timeStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

    function confirm() {
        props.deleteComment();
    }

    return (
        <li>
            <div style={{display: "inline-block"}}>
                <span className="comment-author">@{props.author}:</span>
            </div>
            <Popconfirm
                title="确认删除留言吗？"
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
            >
                <a className="comment-delete" style={{float: "right",paddingLeft: "10px"}} href="#">Delete</a>
            </Popconfirm>
            <div className="comment-time">
                {timeStr}
            </div>
            <div className="comment-text">
                <span>{props.description}</span>
            </div>
        </li>

    )
}

export default Comment;