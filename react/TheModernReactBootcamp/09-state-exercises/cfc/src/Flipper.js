import React , {Component} from 'react';
import Coin from './Coin';

class Flipper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timesFlipped: 0,
            heads: 0,
            curSide: ''
        }
        this.incrementFlips = this.incrementFlips.bind(this);
        this.flipCoin = this.flipCoin.bind(this);
    }

    incrementFlips(curState) {
        let rand = Math.floor(Math.random() * 2);
        return {
            timesFlipped: curState.timesFlipped + 1,
            heads: curState.heads + rand,
            curSide: rand
         };
    }

    flipCoin() {
        console.log('flip',Math.floor(Math.random() * 2));
        this.setState(this.incrementFlips);
    }

    render(){
        return(
            <div>
                <h1>Coin Flipper</h1>
                <Coin side={this.state.curSide} />
                <button onClick={this.flipCoin}>Flip Me</button>
                <h2>Out of {this.state.timesFlipped} flips, there have been {this.state.heads} heads and {this.state.timesFlipped - this.state.heads} tails.</h2>
            </div>
        )
    }
}

export default Flipper;