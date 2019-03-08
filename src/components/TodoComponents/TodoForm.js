import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.props.formText} onChange={this.props.handleFormText} />
          <input type='submit' value='Add Todo' onClick={this.props.handleSubmit} />
        </form>
        <input type='button' value='Clear Completed' onClick={this.props.handleClearCompleted} />
      </div>
    );
  }

}

export default TodoForm;