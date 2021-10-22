import React, { useState } from 'react';
import Header from '../Header';
import ListOfCards from '../ListOfCards';
import Context from '../helpers/context';
import AddCityCard from '../AddCityCard/AddCityCard';
import './app.scss';

const App = () => {
	const [cards, setCards] = useState([
		{ id: 1, nameCity: 'Kharkiv' },
		{ id: 2, nameCity: 'Kiev' },
	]);

	const deleteCard = (id) => {
		setCards(cards.filter((card) => card.id !== id));
	};

	const addCard = (nameCity) => {
		setCards(
			cards.concat([
				{
					id: Date.now(),
					nameCity,
				},
			]),
		);
	};

	return (
		<Context.Provider value={{ deleteCard }}>
			<Header />
			<AddCityCard onCreate={addCard} />
			{cards.length
				? (<ListOfCards cards={cards} />)
				: (<p>Find city?</p>)}
		</Context.Provider>
	);
};

export default App;
