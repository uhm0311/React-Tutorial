import React from 'react';
import logo from './logo.svg';
import './App.css';

type Hello = {
	name: string
}

class App extends React.Component<Hello> {
	constructor(props: Hello) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Hello {this.props.name}!
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
