// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

import './Todo.css';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h3>Test Header For TodoList</h3>
        <ul>
          {this.props.listItems.map((item) => <Todo item={item} key={item.id} handleTodoClick={this.props.handleTodoClick} />)}
        </ul>
      </div>
    );
  }
}

export default TodoList;