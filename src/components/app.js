import React, { Component } from "react";
// import Header from "./Header";
import SearchWeather from './SearchWeather';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			result: []
		}
	}

	onInputChange = (event) => {
		// console.log(event.target.value);
		this.setState({search:event.target.value})
	}
	onButtonSubmit = () => {
		// this is where i'll have my weather api code i guess.
	}

	render(){
		return <div className="mainDiv">
				<SearchWeather onInputChange={this.onInputChange} />
			</div>;
		}
	}
	export default App;
