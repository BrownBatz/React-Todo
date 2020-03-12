import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: [{task: 'This is a test', id: Date.now(), completed: false}],
    }
  }
  render() {
    return (
      <div>
        <h2>Here is your todo list!</h2>
        <TodoList todoList={this.state.todoList}/>
        <br />
        <h2>Add another task!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
