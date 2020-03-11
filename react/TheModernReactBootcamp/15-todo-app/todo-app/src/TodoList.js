import React , { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import uuid from "uuid/v4";
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                { note: 'do something' , id: uuid() },
                { note: 'something else' , id: uuid() }
            ]
        }
        this.add = this.add.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        }
        )
    }

    editTodo(id,updatedNote) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, note: updatedNote}
            }
            return todo;
        })

        this.setState({
            todos: updatedTodos
        })
    }

    completeTodo(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })

        this.setState({
            todos: updatedTodos
        })
    }

    add(item) {
        let newItem = { ...item , id: uuid() }
        this.setState(state => ({
            todos: [...state.todos, newItem]
        }));
    }

    render() {
        const todos = this.state.todos.map((t) =>
            <Todo
            edit={this.editTodo}
            remove={() => this.removeTodo(t.id)}
            note={t.note}
            key={t.id}
            id={t.id}
            completed={t.completed}
            toggleComplete={this.completeTodo}
            />
        )

        return(
            <div>
                <h1>Todo List</h1>
                {todos}
                <NewTodoForm add={this.add} />
            </div>
        )
    }
}

export default TodoList;