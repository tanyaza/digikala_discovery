const initialState = {
	productsList: [],
	resultCount: "",
	sortOptions: [],
};

const listData = (state = initialState, action) => {
	switch (action.type) {
		case "SET_LIST":
			return {
				...state,
				productsList: action.value,
			};
		case "LOAD_MORE":
			return {
				...state,
				productsList: [...state.productsList, ...action.value],
			};
		case "SET_SORT_OPTIONS":
			return {
				...state,
				sortOptions: action.value,
			};
		case "SET_RESULT_COUNT":
			return {
				...state,
				resultCount: action.value,
			};
		default:
			return state;
	}
};
export default listData;
