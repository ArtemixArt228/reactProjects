import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from '../context';

import logo from '../images/logo.svg';

const Navbar = () => {
	const { openSubmenuFunc, openSidebarFunc, closeSubmenuFunc } =
		useGlobalContext();

	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;

		openSubmenuFunc(page, { center, bottom });
	};

	const handleSubmenu = (e) => {
		const elemClass = e.target.classList;
		if (!elemClass.contains('link-btn')) closeSubmenuFunc();
	};

	return (
		<nav className='nav' onMouseOver={handleSubmenu}>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' className='nav-logo' />
					<button className='btn toggle-btn' onClick={openSidebarFunc}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							company
						</button>
					</li>
				</ul>
				<button className='btn signin-btn'>Sign in</button>
			</div>
		</nav>
	);
};
export default Navbar;
