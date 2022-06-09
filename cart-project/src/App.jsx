import './App.css';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { useGlobalContext } from './context';

const App = () => {
	const { loading } = useGlobalContext();

	return loading ? (
		<div className='loading'>
			<h1>Loading...</h1>
		</div>
	) : (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
};

export default App;
