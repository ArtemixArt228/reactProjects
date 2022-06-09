import './App.css';

import { useState } from 'react';

import Values from 'values.js';
import SingleColor from './SingleColor';
const App = () => {
	const [colorCount, setColorCount] = useState(10);
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(
		new Values('hsl(204deg 100% 50% / 1)').all(10)
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(colorCount);
			setList(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className='container'>
				<h3>Color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder='#0099ff'
						className={`${error ? 'error' : null}`}
					/>
					<input
						className='color-counter'
						type='number'
						value={colorCount}
						onChange={(e) => setColorCount(Number(e.target.value))}
					/>
					<button className='btn' type='submit'>
						submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					const hex = color.hex;
					return <SingleColor key={index} {...color} index={index} hex={hex} />;
				})}
			</section>
		</>
	);
};

export default App;
