import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ title, icon, onClick }) => {
	return (
		<button
			icon={icon}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;

Button.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	onClick: PropTypes.func,
};
