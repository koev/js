class Hello extends React.Component {
  render() {

    /*const {from, to} = this.props;
    return <p>Hi {to} from {from}</p>;*/

    return <p>Hi {this.props.to} from {this.props.from}</p>;
  }
}