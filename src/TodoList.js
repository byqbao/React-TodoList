import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  // 点击按钮添加任务
  addItem() {
    let CurrentText = this.state.items;
    let inputText = this._inputText;
    CurrentText.push({
      text: inputText.value,
      key: Date.now()
    });
    this.setState({
      items: CurrentText
    });
    inputText.value = '';
    inputText.focus();
  }

  render() {
    let { items } = this.state;
    return (
      <div className="TodoList">
        <div className="header">
          <input ref={(a)=>this._inputText=a} placeholder="添加一个任务" />
          <button type="button" onClick={this.addItem}>添加</button>
        </div>
        <ul>
          {
            items.map(item=>
              <li key={item.key}>{item.text}</li>  
            )
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;