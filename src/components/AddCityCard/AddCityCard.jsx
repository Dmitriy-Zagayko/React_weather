import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import { gettingWeather } from '../helpers/request';
import './addCityCard.scss';

const AddCityCard = ({ onCreate }) => {
	const [value, setValue] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();
		if (value.trim()) {
			onCreate(value);
			gettingWeather(e, value);
			setValue('');
		}
	};
	return (
		<form className='addCityCard' onSubmit={submitHandler}>
			<Input
				placeholder='Enter city...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button type='submit' title='Add city' />
		</form>
	);
};

export default AddCityCard;

AddCityCard.propTypes = {
	onCreate: PropTypes.func,
};
