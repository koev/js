import React , { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from "uuid/v4";

class BoxList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes : [
                {bgc : 'lime' , width: '10', height: 10, id: uuid() },
                {bgc : 'orange' , width: '20', height: 10 , id: uuid() }
            ]
        }
        this.addBox = this.addBox.bind(this);
    }

    //option 1 - called with arrow function inline
    removeBox(id) {
        this.setState(state => ({
            boxes: state.boxes.filter(b => b.id !== id)
        }));

    }

    //option 2 - binded and called inside the child component
    addBox(item) {
        let newItem = { ...item };
        this.setState(state => ({
            boxes: [...state.boxes, newItem]
        }));
    }

    render() {

        let box = this.state.boxes.map( b =>
        <Box
        bgc={b.bgc}
        w={b.width}
        h={b.height}
        key={b.id}
        removeBox={() => this.removeBox(b.id)}
        //removeBox={this.removeBox}
        id={b.id}
        />
        )
        return(
            <div>
            <h1>boxlist</h1>

            {box}


            <NewBoxForm addBox={this.addBox}  />
            </div>
        );
    }
}

export default BoxList;