import { getProductsList, getProductDetail } from "../Constants/urls";
import axios from "axios";

export const setProductsList = (val) => {
	return { type: "SET_LIST", value: val };
};
export const setDetail = (val) => {
	return { type: "SET_DETAIL", value: val };
};
export const setSortId = (val) => {
	return { type: "SET_SORTID", value: val };
};
export const loadMore = (val) => {
	return { type: "LOAD_MORE", value: val };
};
export const setSortOptions = (val) => {
	return { type: "SET_SORT_OPTIONS", value: val };
};
export const setResultCount = (val) => {
	return { type: "SET_RESULT_COUNT", value: val };
};

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get(`${getProductDetail}/${id}/`).then((res) => {
			const detail = res.data.data.product;
			console.log(detail);

			if (res.status) {
				dispatch(setDetail(detail));
			}
		});
	};
};
export const getList = (page = 0, sort) => {
	return (dispatch) => {
		sort
			? axios
					.get(`${getProductsList}/?page=${page}&rows=16&sort=${sort}`)
					.then((res) => {
						const products = res.data.data.products;
						const resultCount = res.data.data.pager.total_items;
						const sortOptions = res.data.data.sort_options;

						if (res.status) {
							dispatch(setProductsList(products));
							dispatch(setResultCount(resultCount));
							dispatch(setSortOptions(sortOptions));
						}
					})
			: axios.get(`${getProductsList}/?page=${page}&rows=16`).then((res) => {
					const products = res.data.data.products;
					const resultCount = res.data.data.pager.total_items;
					const sortOptions = res.data.data.sort_options;

					if (res.status) {
						dispatch(setProductsList(products));
						dispatch(setResultCount(resultCount));
						dispatch(setSortOptions(sortOptions));
					}
			  });
	};
};
export const loadMoreFunc = (page = 0, sort) => {
	return (dispatch) => {
		sort
			? axios
					.get(`${getProductsList}/?page=${page}&rows=16&sort=${sort}`)
					.then((res) => {
						const products = res.data.data.products;

						if (res.status) {
							dispatch(loadMore(products));
						}
					})
			: axios.get(`${getProductsList}/?page=${page}&rows=16`).then((res) => {
					const products = res.data.data.products;

					if (res.status) {
						dispatch(loadMore(products));
					}
			  });
	};
};
