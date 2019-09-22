import * as React from "react";
import {message, Typography} from 'antd';
import CollapseDIY from './Collapse'
import Comment from './Comment'
import PubSubDIY from '../../PubSubDIY';

const {Title} = Typography;
const SubmitContext = React.createContext({});

class CommentsApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackInfo: [
                {
                    author: "feedback作者",
                    description: "feedback作者feedback作者feedback作者feedback作者feedback作者",
                    timeStamp: 1568736000000
                }
            ]
        }
    }

    componentDidMount() {
        let pub = new PubSubDIY();
        console.log(pub);
    }

    handleSubmit = (comment) => {
        return new Promise(resolve => {
            let {feedbackInfo} = this.state;
            feedbackInfo.unshift(comment);
            this.setState({feedbackInfo}, () => {
                message.success('留言成功！');
                return resolve();
            })
        })
    };

    handleDelete = (key) => {
        let {feedbackInfo} = this.state;
        feedbackInfo.splice(key, 1);
        this.setState({feedbackInfo}, () => {
            message.success('删除留言成功！');
        })
    };

    render() {
        return (
            <div className="comments-app">
                <SubmitContext.Provider value={this.handleSubmit}>
                    <CommentsAppHeader/>
                </SubmitContext.Provider>
                <CommentsAppBody delete={this.handleDelete} feedbackInfo={this.state.feedbackInfo}/>
            </div>
        )
    }
}

class CommentsAppHeader extends React.Component {
    render() {
        return (
            <>
                <Title style={{color: "#212529"}}>feedback留言板</Title>
                <CollapseDIY/>
            </>
        )
    }
}

function CommentsAppBody(props) {
    return (
        <ul>
            <li>dl社区留言板，欢迎留言~</li>
            {props.feedbackInfo.map((item, index) =>
                <Comment
                    deleteComment={() => {
                        props.delete(index)
                    }}
                    key={index} {...item}/>
            )}
        </ul>
    )
}

export {SubmitContext};
export default CommentsApp;