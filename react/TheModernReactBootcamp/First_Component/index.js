class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

function Hello2() {
	return (
		<div>
			<h1>Hello there2!</h1>
			<h1>Hello there2!</h1>
			<h1>Hello there2!</h1>
		</div>
	);
}

ReactDOM.render(<Hello2 />, document.getElementById('root'));
