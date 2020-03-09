import React , { Component } from 'react';

class Box extends Component {

    render() {
        const styles = { backgroundColor: this.props.bgc, width: this.props.w+'em', height: this.props.h+'em' };
        return (
            <div style={styles}>
                box
            </div>
        );
    }
}

export default Box;