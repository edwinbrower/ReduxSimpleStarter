import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	//<input onChange={this.onInputChange} />

	render () {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={e => this.setState({ term : e.target.value})} 
				/>
				Value of input: {this.state.term}
			</div>
		);
	}

	// onInputChange(e) {
	// 	console.log(e.target.value);
	// 	this.setState({
	// 		term: e.target.value
	// 	});
	// }
}

export default SearchBar;
