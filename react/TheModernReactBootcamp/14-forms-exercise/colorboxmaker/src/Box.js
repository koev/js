import React , { Component } from 'react';

class Box extends Component {

/*
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.removeBox(this.props.id)
    }
    */

    render() {
        const styles = {
            backgroundColor: this.props.bgc,
            width: this.props.w+'em',
            height: this.props.h+'em'
        };
        return (
            <div>
                <div style={styles}>
                    box
                </div>
                <button /*onClick={this.handleClick} */    onClick={this.props.removeBox}>x</button>
            </div>
        );
    }
}

export default Box;