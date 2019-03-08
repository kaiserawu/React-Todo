import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = this.loadFromLocalStorageIfAvailable();
  }

  componentDidUpdate() {
    localStorage.setItem('lastState', JSON.stringify(this.state));
  }

  loadFromLocalStorageIfAvailable = () => {
    let storedState = JSON.parse(localStorage.getItem('lastState'));
    if (storedState !== null) {
      return {
        todoData: storedState.todoData,
        todoId: storedState.todoId,
        formText: ''
      }
    } else {
      return {
        todoData: [],
        todoId: 1,
        formText: ''
      };
    }
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
