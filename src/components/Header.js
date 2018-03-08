import React from 'react';

const Header = props => (
	<header className="top">
    <h1>Atmosphere</h1>
    <h2>Music to match the weather forcast</h2>
    <h4>Today's weather in {props.location}</h4>
	</header>
);

export default Header;