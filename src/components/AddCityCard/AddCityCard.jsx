import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
// import { gettingWeather } from '../helpers/request';
import { KEY } from '../helpers/constants';
import './addCityCard.scss';

const AddCityCard = ({ onCreate }) => {
	const [value, setValue] = useState('');
	// const submitHandler = (e) => {
	// 	e.preventDefault();
	// 	if (value.trim()) {
	// 		onCreate(value);
	// 		// gettingWeather(e, value);
	// 		setValue('');
	// 	}
	// };
	// useEffect(() => {
	// 	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${KEY}&units=metric`)
	// 		.then((response) => response.json())
	// 		.then((data) => setData(data));
	// }, []);
	// const gettingWeather = (e, nameCity) => {
	// 	e.preventDefault();
	// 	if (nameCity.trim()) {
	// 		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${KEY}&units=metric`)
	// 			.then((response) => response.json())
	// 			.then((data) => setData(data));
	// 		onCreate(nameCity);
	// 		setValue('');
	// 	}
	// };

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
		<form className='addCityCard' onSubmit={(e) => gettingWeather(e, value)}>
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
