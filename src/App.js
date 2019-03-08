import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        {
          text: 'list item 1',
          id: 1,
          completed: false
        },
        {
          text: 'second list item',
          id: 2,
          completed: false
        },
        {
          text: 'a 3rd item for the list',
          id: 3,
          completed: false
        }
      ],
      todoId: 4,
      formText: '',
    };
  }

  handleFormText = event => {
    this.setState({
      formText: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todoData: [
          ...prevState.todoData,
          {
            text: this.state.formText,
            id: this.state.todoId,
            completed: false
          }
        ],
        formText: '',
        todoId: this.state.todoId + 1,
      }
    })
  }

  handleTodoClick = todoId => {
    this.setState(prevState => {
      return {
        todoData: prevState.todoData.map(todo => {
          if (todo.id === todoId) {
            return {
              text: todo.text,
              id: todo.id,
              completed: !todo.completed
            }
          } else {
            return todo;
          }
        })
      }
    })
  }

  handleClearCompleted = () => {
    this.setState(prevState => {
      return { todoData: prevState.todoData.filter(todo => todo.completed === false) }
    })
  }

  render() {
    return (
      <div id="app" >
        <h2>Welcome to your Todo App!</h2>
        <TodoForm formText={this.state.formText} handleFormText={this.handleFormText} handleSubmit={this.handleSubmit} handleClearCompleted={this.handleClearCompleted} />
        <TodoList listItems={this.state.todoData} handleTodoClick={this.handleTodoClick} />
      </div>
    );
  }
}

export default App;
