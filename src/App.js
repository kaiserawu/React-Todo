import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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

    this.handleFormText = this.handleFormText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormText(event) {
    this.setState({
      formText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          text: this.state.formText,
          id: this.state.todoId,
          completed: false
        }
      ],
      formText: '',
      todoId: this.state.todoId + 1,
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm formText={this.state.formText} handleFormText={this.handleFormText} handleSubmit={this.handleSubmit} />
        <TodoList listItems={this.state.todoData} />
      </div>
    );
  }
}

export default App;
