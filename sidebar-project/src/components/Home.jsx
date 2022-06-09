import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from '../context';

const Home = () => {
	const { showModalFunc, showSidebarFunc } = useGlobalContext();

	return (
		<main>
			<button className='sidebar-toggle' onClick={showSidebarFunc}>
				<FaBars />
			</button>
			<button className='btn' onClick={showModalFunc}>
				show modal
			</button>
		</main>
	);
};
export default Home;
