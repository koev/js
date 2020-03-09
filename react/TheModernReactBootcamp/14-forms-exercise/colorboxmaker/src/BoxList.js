import React , { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes : [
                {bgc : 'lime' , width: '10', height: 10 },
                {bgc : 'orange' , width: '20', height: 10 }
            ]
        }
        this.addBox = this.addBox.bind(this);
    }

    addBox(item) {
        let newItem = { ...item };
        this.setState(state => ({
            boxes: [...state.boxes, newItem]
        }));
    }

    render() {

        let box = this.state.boxes.map( b => <Box bgc={b.bgc} w={b.width} h={b.height} />)
        return(
            <div>
            <h1>boxlist</h1>

            {box}


            <NewBoxForm addBox={this.addBox} />
            </div>
        );
    }
}

export default BoxList;