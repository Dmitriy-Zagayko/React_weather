import React from 'react';
import PropTypes from 'prop-types';
import CityCard from '../CityCard';
import './listOfCards.scss';

const ListOfCards = ({ cards }) => {
	const showCard = cards.map((card) => {
		return <CityCard cards={card} key={card.id} />;
	});

	return (
		<ul>
			{showCard}
		</ul>
	);
};

export default ListOfCards;

ListOfCards.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object),
};
