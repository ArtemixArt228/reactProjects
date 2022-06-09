import './App.css';

import data from './data';

import { useState } from 'react';

const App = () => {
	const [text, setText] = useState([]);
	const [paragraph, setParagraph] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		let amount = parseInt(paragraph);

		if (paragraph < 0) amount = 1;
		if (paragraph > data.length) amount = data.length;

		setText(data.slice(0, amount));
	};

	return (
		<section className='section-center'>
			<h3>tired of boring lorem ispum?</h3>
			<form className='lorem-form' onSubmit={handleSubmit}>
				<label htmlFor='amount'>paragraphs:</label>
				<input
					type='number'
					name='amount'
					id='amount'
					value={paragraph}
					onChange={(event) => setParagraph(event.target.value)}
				/>
				<button type='submit' className='btn'>
					generate
				</button>
			</form>
			<article className='lorem-text'>
				{text.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</article>
		</section>
	);
};

export default App;
