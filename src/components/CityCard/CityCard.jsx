import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Context from '../helpers/context';
import './cityCard.scss';

const CityCard = ({ cards }) => {
	const { deleteCard } = useContext(Context);
	return (
		<div>
			{
				cards.nameCity
				&& (
					<div>
						<p>{cards.nameCity}</p>
						<p>{cards.data.main.temp.toFixed(0)}</p>
						<p>{cards.data.sys.country}</p>
					</div>
				)
			}
			<Button
				title={'\u00d7'}
				onClick={deleteCard.bind(null, cards.id)}
			/>
		</div>
	);
};

export default CityCard;

CityCard.propTypes = {
	cards: PropTypes.object,
};
