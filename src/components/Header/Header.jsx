import React from 'react';
import { icons } from '../helpers/constants';
import './header.scss';

const Header = () => (
	<header>
		<img src={icons.headerLogo} />
		<h1>Weather forecast</h1>
	</header>
);

export default Header;
