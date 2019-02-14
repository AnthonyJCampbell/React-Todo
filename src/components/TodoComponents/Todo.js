import React from 'react';

const Todo = ({ toggleCompleted, id, completed, task }) => {
    return (
        
        <div className="TodoItem" onClick={() => toggleCompleted(task, id, completed)} data-completed={completed} key={id} >
            {task}
        </div>
    );
}

export default Todo;
