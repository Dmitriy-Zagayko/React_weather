import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type = 'text', onChange, placeholder }) => {
	const handleInputChange = (e) => {
		onChange(e.target.value);
	};
	return (
		<input
			type={type}
			onChange={handleInputChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;

Input.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};
