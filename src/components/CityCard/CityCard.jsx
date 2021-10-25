import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Context from '../helpers/context';
import Modal from '../Modal';
import './cityCard.scss';

const CityCard = ({ cards }) => {
	const { deleteCard } = useContext(Context);
	const [modalHide, setModalHide] = useState(false);

	const openModal = () => {
		setModalHide(true);
	};

	const closeModal = () => {
		setModalHide(false);
	};
	
	return (
		<>
			{
				modalHide
					? <Modal onClose={closeModal} cardsInfo={cards}/>
					: null
			}
			<div className="cards">
				<div className='card'>
					{
						cards.nameCity
						&& (
							<div className='info'>
								<h1>{cards.nameCity}</h1>
								<div>
									<h1>
										{cards.data.main.temp.toFixed(0)}
										°C
									</h1>
									<Button
										title='More'
										onClick={openModal}
									/>
									<Button
										title='Delete'
										onClick={deleteCard.bind(null, cards.id)}
									/>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</>
	);
};

export default CityCard;

CityCard.propTypes = {
	cards: PropTypes.object,
};
