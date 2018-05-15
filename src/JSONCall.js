import React, { Component } from 'react';
import axios from 'axios';

class Data extends Component {
	constructor() {
		super();
		this.state = {
			info: []
		};
	};

	componentDidMount() {
	    axios.get('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured')
	      .then(res => {
	        const info = res.data.posts;
	        this.setState({ info: info });
	      })
	};

	render() {
		console.log(this.state.info)
		return(
	        this.state.info.length ? (
	          <div>
	            {this.state.info.map(item => 
	              <ul>
	              	<li> {item.authors} </li>
	                <li> {item.type} </li>
	                <li> {item.id} </li>
	              </ul>
	            )}
	          </div>

	        ) : ("Loading...")
		)
	}
}

export default Data;
