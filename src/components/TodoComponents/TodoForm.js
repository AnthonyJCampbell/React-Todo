import React from 'react';


class TodoForm extends React.Component {
    state = {
        input: '',
    }
    
    changeHandler = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        this.setState({
            input: event.target.value,
        });
    }
    
    onButtonClick = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.input);
        this.clearInput();
    }

    removeCompleted = (event) => {
        event.preventDefault();
        this.props.removeCompleted();
    }

    clearInput = () => {
        this.setState({ input: '' });
    }

    render () {
        return (
            <div>
                <form className="TodoForm">
                    <input className="inputBar" type="text" placeholder="Your To-Do..." value={this.state.input} onChange={this.changeHandler} />
                    <input type="submit" value="Add Todo" onClick={this.onButtonClick} />
                    <input type="submit" value="Clear Completed" onClick={this.removeCompleted} />
                </form> 
            </div>
        );
    }
}

export default TodoForm;