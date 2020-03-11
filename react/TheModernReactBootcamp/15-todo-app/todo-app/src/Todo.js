import React , { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            task: this.props.note
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    toggleForm() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
          });
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.task);
        this.toggleForm();
    }

    handleComplete(evt) {
        evt.preventDefault();
        this.props.toggleComplete(this.props.id)
    }

    render() {
        let result;
        if (this.state.editMode) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input value={this.state.task} name="task" onChange={this.handleChange} />
                        <button>save</button>
                    </form>
                </div>
            );
        } else {
            result = (
            <div>
                <div onClick={this.handleComplete} className={this.props.completed ? 'completed' : 'not-completed'}>{this.props.note}</div>
                <button onClick={this.props.remove}>x</button>
                <button onClick={this.toggleForm}>edit</button>
            </div>
            )
        }

        return result;
    }
}

export default Todo;