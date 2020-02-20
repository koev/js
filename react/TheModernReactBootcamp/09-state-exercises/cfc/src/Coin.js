import React , {Component} from 'react';

class Coin extends Component {
    render() {
        return(
            <div>
                <img width="200" src={this.props.side ? 'https://tinyurl.com/react-coin-heads-jpg' : 'https://tinyurl.com/react-coin-tails-jpg'} alt=''/>
            </div>
        )
    }
}

export default Coin;