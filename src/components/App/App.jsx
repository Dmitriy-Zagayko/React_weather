import React, { useState, useEffect } from 'react';
import Header from '../Header';
import ListOfCards from '../ListOfCards';
import Context from '../helpers/context';
import AddCityCard from '../AddCityCard/AddCityCard';
import './app.scss';

const App = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const card = localStorage.getItem('cards') || [];
		setCards(JSON.parse(card));
	}, []);

	useEffect(() => {
		localStorage.setItem('cards', JSON.stringify(cards));
	}, [cards]);

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

	const deleteCard = (id) => {
		setCards(cards.filter((card) => card.id !== id));
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
