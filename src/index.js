import React from 'react';
import ReactDOM from 'react-dom';
import './components/Comments/comments-app.css';
import 'antd/dist/antd.css';

import CommentsApp from './components/Comments/Comments-app';

// import Toggle from  './components/TodoList/TodoList'
// import Test from  './components/Test/Test'
// import Tab from './components/Tab/Tab'
// import Css_test from './components/Css-test/css'

ReactDOM.render(
    <CommentsApp />,
    document.getElementById('root')
);
