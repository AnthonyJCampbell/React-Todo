// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import TodoForm from './TodoForm';

class TodoList extends React.Component {
    constructor (props) {
        super()

        this.state = {
            
        }
    }

    clickToCompleteHandler = (todo) => {
        return (this.props.markComplete(todo));
    }

    render() {
        return (
            <div className="TodoList">
                <h2>Welcome to your Todo App!</h2>
                {this.props.todos.map((todo) =>{
                    return (
                        <div onClick={()=> this.clickToCompleteHandler(todo)} className="Todo" key={todo.id} data-completed={todo.completed}>
                            {todo.task}
                        </div>
                    );
                })}
                <TodoForm removeCompleted={this.props.removeCompleted} addTodo={this.props.addTodo} />
            </div>
        );
    }
}

export default TodoList;
