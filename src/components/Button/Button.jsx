import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ title, icon, type, onClick }) => {
	return (
		<button
			icon={icon}
			type={type}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;

Button.propTypes = {
	type: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
	onClick: PropTypes.func,
};
