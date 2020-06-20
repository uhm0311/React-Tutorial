import React, { ChangeEvent, FormEvent } from 'react';
import './App.css';
import { setTimeout } from 'timers';

type Hello = {
	name: string
}

type Item = {
	text: string,
	id: number
}

class App extends React.Component<Hello, {seconds: number, items: Item[], text: string}> {
	interval: NodeJS.Timeout;

	constructor(props: Hello) {
		super(props);

		this.state = { seconds: 0, items: [], text: '' };
		this.interval = setTimeout(() => {}, 0);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	tick() {
		this.setState(state => ({
			seconds: state.seconds + 1
		}));
	}

	handleChange(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;

		this.setState(state => ({
			text: value
		}));
	}

	handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (this.state.text.trim().length > 0) {
			const newItem = {
				text: this.state.text.trim(),
				id: Date.now()
			};

			this.setState(state => ({
				items: state.items.concat(newItem),
				text: ''
			}));
		}
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
					<div>
						<h3>TODO</h3>
						<TodoList items={this.state.items}/>
						<form onSubmit={this.handleSubmit}>
							<label htmlFor="new-todo">
								What needs to be done?
							</label>
							<br></br>
							<input
								id="new-todo"
								onChange={this.handleChange}
								value={this.state.text}>
							</input>
							<button>
								Add #{this.state.items.length + 1}
							</button>
						</form>
					</div>
				</header>
			</div>
		);
	}
}

class TodoList extends React.Component<{items: Item[]}> {
	render() {
		return (
			<ul>
				{this.props.items.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		)
	};
}

export default App;
