import React from "react";
import Header from "./Header";
// import CityPicker from "./CityPicker";

class App extends React.Component {
	render() {
		return <div className="catch-of-the-day">
				<Header location="Toronto" />
			</div>;
	}
}

export default App;
// <div>
//   <CityPicker />
// </div>