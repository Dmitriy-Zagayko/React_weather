import React, { useState, useEffect } from 'react';
import Header from '../Header';
import ListOfCards from '../ListOfCards';
import Context from '../helpers/context';
import RequestWeather from '../RequestWeather/RequestWeather';
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

	const addCard = (nameCity, data) => {
		setCards(
			cards.concat([
				{
					id: Date.now(),
					nameCity,
					data,
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
			<RequestWeather onCreate={addCard} />
			{cards.length
				? (<ListOfCards cards={cards} />)
				: (<p>Most importantly, what the weather in your home.</p>)}
		</Context.Provider>
	);
};

export default App;
