import logo from '../logo.svg';

import { FaTimes } from 'react-icons/fa';

import { social, links } from '../data';

import { useGlobalContext } from '../context';

const Sidebar = () => {
	const { closeSidebarFunc, showSidebar } = useGlobalContext();

	return (
		<aside className={`${showSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
			<div className='sidebar-header'>
				<img src={logo} alt='logo' className='logo' />
				<button onClick={closeSidebarFunc} className='close-btn'>
					<FaTimes />
				</button>
			</div>
			<ul className='links'>
				{links.map((link) => {
					const { id, url, text, icon } = link;
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className='social-icons'>
				{social.map((socialLink) => {
					const { id, url, icon } = socialLink;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};
export default Sidebar;
