import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Submenu from './components/Submenu';

const App = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Hero />
			<Submenu />
		</>
	);
};

export default App;
