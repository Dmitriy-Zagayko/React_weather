import React from 'react';
import './button.scss';

const Button = ({ title, icon, onClick }) => {
	return (
		<button
			icon={icon}
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default Button;
