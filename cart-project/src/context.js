import React, { useContext, useReducer, useEffect } from 'react';

import cartItems from './data';

import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

export const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const clearOneItem = (id) => {
		dispatch({ type: 'CLEAR_ITEM', payload: id });
	};

	/*const increaseItem = (id) => {
		dispatch({ type: 'INCREASE_ITEM', payload: id });
	};

	const decreaseItem = (id) => {
		dispatch({ type: 'DECREASE_ITEM', payload: id });
	};*/

	const toggleAmount = (id, type) => {
		dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
	};

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });

		const response = await fetch(url);
		const result = await response.json();

		dispatch({ type: 'DISPLAY_ITEMS', payload: result });
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: 'GET_TOTALS' });
	}, state.cart);

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				clearOneItem,
				toggleAmount,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
