import React, { useState, useContext } from 'react';

import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openSubmenu, setOpenSubmenu] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: '', links: [] });

	const openSidebarFunc = () => {
		setOpenSidebar(true);
	};
	const closeSidebarFunc = () => {
		setOpenSidebar(false);
	};
	const openSubmenuFunc = (link, position) => {
		const page = sublinks.find((sublink) => sublink.page === link);
		setPage(page);

		setLocation(position);
		setOpenSubmenu(true);
	};
	const closeSubmenuFunc = () => {
		setOpenSubmenu(false);
	};

	return (
		<AppContext.Provider
			value={{
				openSidebar,
				openSubmenu,
				openSubmenuFunc,
				openSidebarFunc,
				closeSubmenuFunc,
				closeSidebarFunc,
				location,
				page,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
