import { FaTimes } from 'react-icons/fa';

import sublinks from '../data';

import { useGlobalContext } from '../context';

const Sidebar = () => {
	const { openSidebar, closeSidebarFunc } = useGlobalContext();

	return (
		<aside
			className={`${openSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
		>
			<div className='sidebar'>
				<button className='close-btn' onClick={closeSidebarFunc}>
					<FaTimes />
				</button>
				<div className='sidebar-links'>
					{sublinks.map((sublink, index) => {
						const { page, links } = sublink;
						return (
							<article key={index}>
								<h4>{page}</h4>
								<div className='sidebar-sublinks'>
									{links.map((link, index) => {
										const { url, icon, label } = link;
										return (
											<a key={index} href={url}>
												{icon}
												{label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};
export default Sidebar;
