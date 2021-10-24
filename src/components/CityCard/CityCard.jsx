import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Context from '../helpers/context';
import './cityCard.scss';

const CityCard = ({ cards }) => {
	const { deleteCard } = useContext(Context);
	// const infoWeather = cards.data.weather.map((i) => {
	// 	return <p>{i.main}{i.description}</p>;
	// });

	return (
		<div className="cards">
			<Button
				title={'\u00d7'}
				onClick={deleteCard.bind(null, cards.id)}
			/>
			<div className='card'>
				{
					cards.nameCity
					&& (
						<div>
							<h1>{cards.nameCity}</h1>
							<h3>{cards.data.sys.country}</h3>
							<h3>
								{cards.data.main.temp.toFixed(0)}
								°
							</h3>
						</div>
					)
				}
				<Button
					title='More'
				/>
			</div>
		</div>
	);
};

export default CityCard;

CityCard.propTypes = {
	cards: PropTypes.object,
};
