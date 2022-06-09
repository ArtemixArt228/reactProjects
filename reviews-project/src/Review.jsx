import people from './data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/all';

import { useState } from 'react';

const Review = () => {
	const [index, setIndex] = useState(0);
	/*const { id, name, job, image, text } = people[index];*/

	const checkSlideNumber = (position) => {
		if (position > people.length - 1) {
			return 0;
		}
		if (position < 0) {
			return people.length - 1;
		}

		return position;
	};

	const moveToPrev = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkSlideNumber(newIndex);
		});
	};

	const moveToNext = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkSlideNumber(newIndex);
		});
	};

	const randomReview = () => {
		setIndex((index) => {
			let randIndex = Math.floor(Math.random() * people.length);
			if (randIndex === index) randIndex = index + 1;

			return checkSlideNumber(randIndex);
		});
	};
	return (
		<article className='review'>
			<div className='img-container'>
				<img
					src={people[index].image}
					alt={people[index].name}
					className='person-img'
				/>
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{people[index].name}</h4>
			<p className='job'>{people[index].job}</p>
			<p className='info'>{people[index].text}</p>
			<div className='button-container'>
				<button onClick={moveToPrev} className='prev-btn'>
					<FaChevronLeft />
				</button>
				<button onClick={moveToNext} className='next-btn'>
					<FaChevronRight />
				</button>
			</div>
			<button onClick={randomReview} className='random-btn'>
				Suprise Me
			</button>
		</article>
	);
};
export default Review;
