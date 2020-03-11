import React , { Component } from 'react';

class NewTodoForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            note: ''
        }
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
          });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = {...this.state, completed: false}
        this.props.add(newTodo);
        this.setState({ note: "" });
    }

    render() {
        return(
            <div>
                <h4>new todo</h4>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id='note'
                        name='note'
                        value={this.state.note}
                        placeholder="todo"
                        onChange={this.handleChange}
                    />

                    <button>Add todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;