const initialState = {
	product: [],
	loading: true,
};

const detailData = (state = initialState, action) => {
	switch (action.type) {
		case "SET_DETAIL":
			return {
				...state,
				product: action.value,
				loading: false,
			};

		default:
			return state;
	}
};
export default detailData;
