import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import './App.css';
import Nav from './Nav';
import Dog from './Dog';
import DogList from './DogList';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: '',
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: '',
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: '',
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {
    let {dogs} = this.props;

    return (
      <div className="App">

        <Nav dogs={dogs} />
        <DogList dogs={dogs} />

        <Switch>
          <Route
            exact
            path='/dog/:name'
            render={routeProps => <Dog {...routeProps} dogs={dogs} />}
          />

        </Switch>
      </div>
    );
  }

}

export default App;
