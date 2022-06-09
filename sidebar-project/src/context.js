import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);

	const showModalFunc = () => {
		setShowModal(true);
	};
	const closeModalFunc = () => {
		setShowModal(false);
	};
	const showSidebarFunc = () => {
		setShowSidebar(true);
	};
	const closeSidebarFunc = () => {
		setShowSidebar(false);
	};

	return (
		<AppContext.Provider
			value={{
				showModal,
				showSidebar,
				showModalFunc,
				closeModalFunc,
				showSidebarFunc,
				closeSidebarFunc,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
