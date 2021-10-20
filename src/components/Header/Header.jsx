import React from 'react';
import './header.scss';
import logo from '../../../public/assets/images/logo.png';

const Header = () => (
	<header>
		<img src={logo}/>
		<h1>Weather forecast</h1>
	</header>
)

export default Header;