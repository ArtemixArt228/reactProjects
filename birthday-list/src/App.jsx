import './App.css';
import data from './data';

import List from './List';
import SearchBar from './SearchBar';

import { useState } from 'react';

const App = () => {
	const [people, setPeople] = useState(data);

	const clearAll = () => {
		setPeople([]);
	};

	return (
		<>
			<SearchBar {...{ people, setPeople }} />

			<main>
				<section className='container'>
					{people.length === 0 ? (
						<h3 className='congrats'>
							Congrats, you make happy all of your friends
						</h3>
					) : (
						<>
							<h3>{people.length} birthdays today</h3>
							<List {...{ people }} />
							<button onClick={clearAll}>Clear all</button>
						</>
					)}
				</section>
			</main>
		</>
	);
};
export default App;
