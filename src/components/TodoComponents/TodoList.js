// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = ({ list, toggleCompleted }) => {
    return (
        <div>
            {list.map((todo) => {
                return (
                    <Todo 
                        toggleCompleted={toggleCompleted}
                        task={todo.task} 
                        completed={todo.completed}  
                        id={todo.id}/>
                )  
            })
            }
        </div>
    );
}

export default TodoList;