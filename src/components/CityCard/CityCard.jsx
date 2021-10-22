import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Context from '../helpers/context';
import './cityCard.scss';

const CityCard = ({ cards }) => {
	const { deleteCard } = useContext(Context);
	return (
		<li>
			{cards.nameCity}
			<Button
				title={'\u00d7'}
				onClick={deleteCard.bind(null, cards.id)}
			/>
		</li>
	);
};

export default CityCard;

CityCard.propTypes = {
	cards: PropTypes.object,
};
