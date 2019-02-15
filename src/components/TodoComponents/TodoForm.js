import React from 'react';

class TodoForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            inputValue: '',
        }
    }
    
    onChangeHandler = (event) => {
        this.setState({inputValue: event.target.value})
    }

    onAddToDoHandler = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.inputValue);
        this.clearInputArea()
    }

    clearInputArea = (event) => {
        this.setState({inputValue: '',})
    }

    removeCompletedHandler = (event) => {
        event.preventDefault();
        this.props.removeCompleted();
    }

    render () {    
        
        return (
            <div className="TodoForm">
                <form>
                    <input 
                        type="text"
                        placeholder="My To-Do..."
                        value={this.state.inputValue}
                        onChange={this.onChangeHandler} />
                    <input 
                        type="submit" 
                        value="Add To-Do"
                        onClick={this.onAddToDoHandler}/>
                    <input 
                        type="submit" 
                        value="Clear Completed" 
                        onClick={this.removeCompletedHandler}/>
                </form>
            </div>
        )  
    }

}
    

export default TodoForm;
