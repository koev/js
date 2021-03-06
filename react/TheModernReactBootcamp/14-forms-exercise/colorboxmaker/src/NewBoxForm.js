import React , { Component } from 'react';
import uuid from "uuid/v4";

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            bgc: '',
            width: '',
            height: ''
        }
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
          });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.addBox(newBox);
        this.setState({ bgc: "", width: "", height: "" });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    id='bgc'
                    name='bgc'
                    value={this.state.bgc}
                    placeholder="color"
                    onChange={this.handleChange}
                />

                <input
                    id='width'
                    name='width'
                    value={this.state.width}
                    placeholder="width"
                    onChange={this.handleChange}
                />

                <input
                    id='height'
                    name='height'
                    value={this.state.height}
                    placeholder="height"
                    onChange={this.handleChange}
                />

                <button>Add Box</button>
            </form>
        );
    }
}

export default NewBoxForm;