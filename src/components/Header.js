import React from 'react';
import CityPicker from './CityPicker';

const Header = props => (
	<header className="top">
    <h1 className='titleBlock'>Atmosphere</h1>
    <h2 className='subTitle'>Music to match the weather forcast</h2>
    <h4 className='locationTitle' >Today's weather in {props.location}</h4>
	</header>
);

export default Header;