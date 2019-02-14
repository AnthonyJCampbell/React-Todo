import React from 'react';
import uuid from 'uuid';
import './components/TodoComponents/Todo.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();

    this.state = {
      todos : [
        {
          task: 'Organize Garage',
          id: uuid(),
          completed: false
        },
        {
          task: 'Build Garage',
          id: uuid(),
          completed: false
        },
      ],
    }
  }

    addTodo = (Todo) => {
      this.setState(st => ({todos: st.todos.concat({ 
        task: Todo,
        id: uuid(),
        completed : false
      })}))
    }
  
    toggleCompleted = (task, id, completed) => {
      this.setState(prevState => {
        const arrayWithoutTheOneToBeUpdated = prevState.todos.filter(td => td.id !== id);
        if (completed === false) {
          return {todos: arrayWithoutTheOneToBeUpdated.concat({ task, id, completed: true })};
        }
          return {todos: arrayWithoutTheOneToBeUpdated.concat({ task, id, completed: false })};
      })
    }

    // Add the ability to remove any todos that you have completed. `.filter` will be your best friend here. When a user clicks on the `Clear Completed` button call your handler function that will filter out any todos that have the completed flag toggled to `true`.

    removeCompleted = () => {
      this.setState(prevState => {
        return {todos: prevState.todos.filter(todo => todo.completed !== true)}
      })
    }

  // this.setState(lastState => ({
    //   todos: lastState.todos.map(todo => {
    //     if (todo.id === id) {
    //       return { task, id, completed: true}
    //     }
    //     return todo;
    //   })
    // }));

    // updateFriend = (id, name, age) => {
    //     // update an existing friend (the `id` tells us which friend to update)
    //     this.setState(lastState => ({
    //       friends: lastState.friends.map(friend => {
    //         if (friend.id === id) {
    //           return { id, name, age };
    //         }
    //         return friend;
    //       }),
    //     }));
    //   }
  
  render() {
    return (
      <div className="TodoHolder">
        <h2>Total To-do List!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} list={this.state.todos} />
        <TodoForm removeCompleted={this.removeCompleted} addTodo={this.addTodo}/>
      </div>
      
    );
  }
}

export default App;
