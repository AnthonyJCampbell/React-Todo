import React from 'react';
import uuid from 'uuid';

import './components/TodoComponents/Todo.css';

import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: uuid(),
          completed: false
        },
        {
          task: 'Organize Garage',
          id: uuid(),
          completed: false
        },
        {
          task: 'Organize Garage',
          id: uuid(),
          completed: false
        },
        {
          task: 'Organize Garage',
          id: uuid(),
          completed: false
        },
      ],
    }
  }

  addTodo = (inputValue) => {
    this.setState(prevState => ({
      todos: prevState.todos.concat({
        task: inputValue,
        id: uuid(),
        completed: false,
      })
    }))
  }



  markComplete = (incomingTodo) => {
    console.log(incomingTodo)
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === incomingTodo.id) {
          if (incomingTodo.completed === false) {
            return { task: incomingTodo.task, id: incomingTodo.id, completed: true,};
          }
          else {
            return { task: incomingTodo.task, id: incomingTodo.id, completed: false,};
          }
        }
        return todo;
      })
    }))
  }

  removeCompleted = () => {
    this.setState((prevState)=> {
      return {todos: prevState.todos.filter(todo => todo.completed !== true)};
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="container">
        <TodoList addTodo={this.addTodo} removeCompleted={this.removeCompleted} todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
