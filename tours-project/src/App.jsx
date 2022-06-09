import './App.css';

import { useState, useEffect } from 'react';

import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (tourID) => {
		const filteredTours = tours.filter((tour) => tour.id !== tourID);

		setTours(filteredTours);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setLoading(true);

		try {
			const response = await fetch(url);
			const tours = await response.json();
			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	return loading ? (
		<main>
			<Loading />
		</main>
	) : (
		<main>
			{tours.length !== 0 ? (
				<Tours {...{ tours, removeTour }} />
			) : (
				<div className='title'>
					<h2>no tours left</h2>
					<button className='btn' onClick={fetchData}>
						Refresh
					</button>
				</div>
			)}
		</main>
	);
};

export default App;
