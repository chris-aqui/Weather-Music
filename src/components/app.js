import React from "react";
import Header from "./Header";
import CityPicker from './CityPicker';

class App extends React.Component {
	render(){
		return <div className="mainDiv">
			<div>
				<Header location="Toronto" />
			</div>
			<CityPicker />
			</div>;
		}
	}
	export default App;
