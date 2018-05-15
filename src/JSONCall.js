import React, { Component } from 'react';

class Data extends Component {
	constructor() {
		super();
		this.state = {
			info: []
		};
	};

	componentDidMount() {
		fetch('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured')
		.then(result => result.json())
		.then(info => this.setState({ info }));
	};

	render() {
		console.log(this.state.info)
		return(
		<ul>
	      {this.state.info.length ?
	      	this.state.info.map(item=><li key={item.id}>{item.body}</li>) 
	        : <li>Loading...</li>
	      }
	  </ul>
	)
	}
}

export default Data; 
