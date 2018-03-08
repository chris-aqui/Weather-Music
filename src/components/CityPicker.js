import React from 'react';

class CityPicker extends React.Component {
  constructor(props) {
    super(props);
    this.goToCity = this.goToCity.bind(this);
  }


	render() {
		return (
			<form className="city-selector" onSubmit={this.props.goToCity} >
        <input type="text"
          required
          placeholder="Whats your City?" />
        <button type="submit"> Go!</button>
        </form>
		);
	}
}

export default CityPicker;

