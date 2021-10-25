import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './modal.scss';

const Modal = ({ onClose, cardsInfo }) => {
	const sunset = cardsInfo.data.sys.sunset;
	const time = new Date();
	time.setTime(sunset);
	const sunsetTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

	const sunrise = cardsInfo.data.sys.sunrise;
	const date = new Date();
	date.setTime(sunrise);
	const sunriseDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	return (
		<div className='modal'>
			<div className="blog-card spring-fever">
				<div className="title-content">
					<h3>{cardsInfo.nameCity}</h3>
					<hr />
					<div className="intro">
						<ul>
							<li>
								Sky:&nbsp;
								{cardsInfo.data.weather[0].description}
							</li>
							<li>
								Temp:&nbsp;
								{cardsInfo.data.main.temp.toFixed(0)}
								°C
							</li>
							<li>
								Feels like:&nbsp;
								{cardsInfo.data.main.feels_like.toFixed(0)}
								°C
							</li>
							<li>
								Min temp:&nbsp;
								{cardsInfo.data.main.temp_min.toFixed(0)}
								°C
							</li>
							<li>
								Max temp:&nbsp;
								{cardsInfo.data.main.temp_max.toFixed(0)}
								°C
							</li>
							<li>
								Pressure:&nbsp;
								{cardsInfo.data.main.pressure}
							</li>
							<li>
								Sunrise:&nbsp;
								{sunriseDate}
							</li>
							<li>
								Sunset:&nbsp;
								{sunsetTime}
							</li>
						</ul>
					</div>
				</div>
				<div className="card-info">
					<Button title='Close' onClick={onClose}/>
				</div>
				<div className="utility-info" />
				<div className="gradient-overlay" />
				<div className="color-overlay" />
			</div>
		</div>
	);
};

export default Modal;

Modal.propTypes = {
	onClose: PropTypes.func,
	cardsInfo: PropTypes.object,
};
