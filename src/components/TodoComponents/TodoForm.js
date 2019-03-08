import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div id='todoForm'>
        <form className='inputForm'>
          <input type='text' value={this.props.formText} className='textField' onChange={this.props.handleFormText} />
          <input type='submit' value='Add Todo' className='button' onClick={this.props.handleSubmit} />
        </form>
        <input type='button' value='Clear Completed' className='button' onClick={this.props.handleClearCompleted} />
      </div>
    );
  }

}

export default TodoForm;