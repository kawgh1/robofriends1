import React from 'react';
import CardList from '../components/CardList';
// robots copy and pasted in pre-made file
// files with multiple exports must be desctructured like this

// no longer using an array of robots, we are now 
// initializing with an empty array and using a lifecycle hook to grab them from somewhere else
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

import ErrorBoundary from '../components/ErrorBoundary';

// because 'App' now owns 'state', it's allowed to change it
// and since it is the root node, when it changes state
// all children nodes are updated that are affected
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => {
		// 	return response.json();
		// })
		// .then(users => {
		// 	this.setState({ robots:users })
		// })

		// same as
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots:users }));

	}

	// because the event occurred on the Virtual DOM Window object,
	// 'this' is the input and not the filteredRobots
	// so need to change the method structure (same for all custom React functions)

	// onSearchChange(event){ need to be
	onSearchChange = (event) => {

		this.setState({searchfield: event.target.value})
	}
	render() {

		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

			// print out whatever is typed in the event
			// console.log(event.target.value);
			// console.log(filteredRobots);

		})

		if (this.state.robots.length === 0){
			return <h1>Loading...</h1>
		} else {
		// was <CardList robots={this.state.robots}/>
			return (
				<div className = 'tc'>
				
				<h1 className='f2'>Robofriends</h1>
				
				
					<SearchBox searchChange={this.onSearchChange}/>
				
				<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots}/>
				</ErrorBoundary>
				</Scroll>
				</div>


				);
			}
		}

}

export default App;