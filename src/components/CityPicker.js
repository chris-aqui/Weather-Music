import React from 'react';

class CityPicker extends React.Component {
	myInput = React.createRef();
	goToCity = event => {
		event.preventDefault();
		const cityName = this.myInput.value.value;
		this.props.history.push(`/store/${cityName}`);
	};
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToCity}>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Whats your City?"
					defaultValue="Toronto"
				/>
				<button type="submit">Go!</button>
			</form>
		);
	}
}

export default CityPicker;