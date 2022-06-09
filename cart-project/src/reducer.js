const reducer = (state, action) => {
	switch (action.type) {
		case 'LOADING':
			return { ...state, loading: true };
		case 'DISPLAY_ITEMS':
			return { ...state, loading: false, cart: action.payload };
		case 'CLEAR_CART':
			return { ...state, cart: [] };
		case 'CLEAR_ITEM':
			return {
				...state,
				cart: state.cart.filter((item) => action.payload !== item.id),
			};
		case 'TOGGLE_AMOUNT':
			if (action.payload.type === 'increase') {
				let updatedCart = state.cart.map((item) => {
					if (action.payload.id === item.id)
						return { ...item, amount: item.amount + 1 };

					return item;
				});
				return { ...state, cart: updatedCart };
			}
			if (action.payload.type === 'decrease') {
				let decreasedCart = state.cart
					.map((item) => {
						if (action.payload.id === item.id)
							return { ...item, amount: item.amount - 1 };

						return item;
					})
					.filter((item) => item.amount !== 0);
				return { ...state, cart: decreasedCart };
			}
			return { ...state };
		/*case 'INCREASE_ITEM':
			let updatedCart = state.cart.map((item) => {
				if (action.payload === item.id)
					return { ...item, amount: item.amount + 1 };

				return item;
			});
			return { ...state, cart: updatedCart };
		case 'DECREASE_ITEM':
			let decreasedCart = state.cart
				.map((item) => {
					if (action.payload === item.id)
						return { ...item, amount: item.amount - 1 };

					return item;
				})
				.filter((item) => item.amount !== 0);
			return { ...state, cart: decreasedCart };*/
		case 'GET_TOTALS':
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					const priceOfOneItem = price * amount;

					cartTotal.total += priceOfOneItem;
					cartTotal.amount += amount;
					return cartTotal;
				},
				{
					total: 0,
					amount: 0,
				}
			);

			total = parseFloat(total.toFixed(2));

			return { ...state, total, amount };
		default:
			return state;
	}
};

export default reducer;
