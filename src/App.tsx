import React from 'react';
import logo from './logo.svg';
import './App.css';

type Hello = {
	name: string
}

class App extends React.Component<Hello, {seconds: number}> {
	interval: NodeJS.Timeout;
	
	constructor(props: Hello) {
		super(props);

		this.state = { seconds: 0 };
		this.interval = setTimeout(() => {}, 0);
	}

	tick() {
		this.setState(state => ({
			seconds: state.seconds + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Hello {this.props.name}!
					</p>
					<p>
						Seconds: {this.state.seconds}
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
