import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import { KEY } from '../helpers/constants';
import './requestWeather.scss';

const RequestWeather = ({ onCreate }) => {
	const [value, setValue] = useState('');

	const gettingWeather = async (e, nameCity) => {
		e.preventDefault();
		if (nameCity.trim()) {
			const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${KEY}&units=metric`);
			const data = await res.json();
			console.log(data);
			onCreate(nameCity, data);
			setValue('');
		}
	};
	return (
		<form className='requestWeather' onSubmit={(e) => gettingWeather(e, value)}>
			<Input
				placeholder='Enter city...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button type='submit' title='Find out weather' />
		</form>
	);
};

export default RequestWeather;

RequestWeather.propTypes = {
	onCreate: PropTypes.func,
};
