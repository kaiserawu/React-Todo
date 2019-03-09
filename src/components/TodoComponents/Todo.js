import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  render() {
    let completed = this.props.item.completed ? 'completed' : '';
    return (
      <div>
        <li className={`todo ${completed}`} id={this.props.item.id} onClick={() => { this.props.handleTodoClick(this.props.item.id) }} >{this.props.item.text}</li>
      </div>
    );
  }
}

export default Todo;