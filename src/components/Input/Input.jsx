import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type = 'text', value, onChange, placeholder }) => {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;

Input.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};
