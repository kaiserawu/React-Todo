// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h3>Test Header For TodoList</h3>
        <ul>
          {this.props.listItems.map((item) => <Todo key={item.id} text={item.text} />)}
        </ul>
      </div>
    );
  }
}

export default TodoList;