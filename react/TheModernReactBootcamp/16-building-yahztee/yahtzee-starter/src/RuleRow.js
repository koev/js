import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {



  render() {
    const hasScore = this.props.score === undefined;
    const  { name, score, doScore, description } = this.props;

    return (
      <tr className={`RuleRow RuleRow-${hasScore ? "active" : "disabled"}`} onClick={hasScore ? doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{hasScore ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;