import React, { Component } from "react";

class Dog extends Component {
  render() {

    let dog = this.props.dogs.filter(d => d.name===this.props.match.params.name)

    return (
      <div>
        <h1>
         dog {this.props.match.params.name}
        </h1>
        {dog[0].facts.map(f => f)}

      </div>
    );
  }
}
export default Dog;
