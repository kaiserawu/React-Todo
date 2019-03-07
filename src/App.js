import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: ['list item 1', 'second list item', 'a 3rd item for the list'],
      formText: '',
      formId: 1,
    };

    this.handleFormText = this.handleFormText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormText(event) {
    this.setState({
      formText: event.target.value,
      formId: this.state.formId + 1,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      todoData: [...this.state.todoData, this.state.formText],
      formText: '',
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* <input type='text' value={this.state.formText} onChange={this.handleFormText} /> */}
        <TodoForm formText={this.state.formText} handleFormText={this.handleFormText} handleSubmit={this.handleSubmit} />
        <TodoList listItems={this.state.todoData}/>
      </div>
    );
  }
}

export default App;
