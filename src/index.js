import React from 'react';

// 可以将组件挂载到页面上
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// 将TodoList组件加载到root里
ReactDOM.render(<TodoList />, document.getElementById('root'));
