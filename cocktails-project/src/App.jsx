import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';

import Navbar from './components/Navbar';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route
					exact
					path='/cocktail/:cocktailId'
					element={<SingleCocktail />}
				/>
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
