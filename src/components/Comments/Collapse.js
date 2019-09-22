import React from 'react';
import FormDIY from './FormDIY'
import {Collapse, Icon} from 'antd';
import {SubmitContext} from './Comments-app'

const {Panel} = Collapse;

const panelStyle = {
    fontSize: "20px",
    color: "#155724",
    background: '#c3e6cb',
    borderRadius: 5,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};


class CollapseDIY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: null
        }
    }

    changePanel = (key) => {
        if (key.length === 0) {
            this.setState({
                activeKey: null
            })
        } else {
            this.setState({
                activeKey: '1'
            })
        }
    };

    render() {
        return (
            <Collapse
                activeKey={this.state.activeKey}
                onChange={this.changePanel}
                bordered={false}
                expandIcon={({isActive}) => <Icon type="caret-right" rotate={isActive ? 90 : 0}/>}
            >
                <Panel header="点击留言" key="1" style={panelStyle}>
                    <SubmitContext.Consumer>
                        {
                            context => (
                                <FormDIY submit={context} close={this.changePanel}/>
                            )
                        }
                    </SubmitContext.Consumer>
                </Panel>
            </Collapse>
        );
    }
}

export default CollapseDIY;
