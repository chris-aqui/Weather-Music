import React from "react";
import { render } from "react-dom"; // only importing the render method here
// Components
import App from './components/App';
// Style
// import Style from './css/style.css';
import 'tachyons';

render(<App />, document.querySelector('#main'));

/*
Will ask user for loication and then display the weather in the area.
App will then recommend a spotify playlist.

*/