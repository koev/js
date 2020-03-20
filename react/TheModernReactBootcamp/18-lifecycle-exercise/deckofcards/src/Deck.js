import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {},
      enrolled: [],
      remaining: ''

    };
    this.handleClick = this.handleClick.bind(this);
  }

  //async version
  async componentDidMount() {
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/`;
    let response = await axios.get(url);
    let deck = response.data;
    console.log(response.data.remaining)
    this.setState({ deck });
  }

  async handleClick() {

    if (this.state.remaining !== 0) {
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`;
        let response = await axios.get(url);
        let card = response.data.cards[0];
        let enrolled = this.state.enrolled;
        enrolled.push(card)
        this.setState({ enrolled: enrolled, remaining: response.data.remaining });
    } else {
        alert('finish')
    }

  }

  render() {
    let cards = this.state.enrolled.map( c =>
        <Card image={c.image} alt={c.code} key={c.code} />
    )


    return (
      <div>
        <h1>Deck of Cards</h1>
        <button onClick={this.handleClick}>draw new card</button>
        <div>
            {cards}
        </div>
      </div>
    );
  }
}

export default Deck;
