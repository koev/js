import React, { Component } from "react";
import { Link } from 'react-router-dom';

class DogList extends Component {
  render() {
    let doglist = this.props.dogs.map( d => (
      <Link to={`/dog/${d.name}`}> {d.name}</Link>
    ))
    return (
      <div>
        <h1>dog list</h1>
        {doglist}

      </div>
    );
  }
}
export default DogList;
