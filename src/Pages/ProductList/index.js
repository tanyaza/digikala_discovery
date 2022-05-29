import React, { useEffect, useState } from "react";
import ProductBox from "../../Components/ProductBox/index";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getList, loadMoreFunc } from "../../store/actions";
import { useLocation, useHistory } from "react-router-dom";

function ProductList() {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.listData);
	const history = useHistory();
	const search = useLocation().search;
	const sortId = new URLSearchParams(search).get("sort");

	let page = 0;

	useEffect(() => {
		!sortId ? dispatch(getList()) : dispatch(getList(0, sortId));

		window.addEventListener("scroll", loadMore);
	}, []);
	useEffect(() => {
		dispatch(getList(0, sortId));
	}, [sortId]);

	// infinite scroll function
	const loadMore = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.scrollingElement.scrollHeight
		) {
			!sortId
				? dispatch(loadMoreFunc(page + 1))
				: dispatch(loadMoreFunc(page + 1, sortId));
			page += 1;
		}
	};

	return (
		<div className="products-page">
			{/* product list filter buttons */}
			<div className="products-page__filters">
				<div>
					{productsList.sortOptions.map((option) => (
						<button
							onClick={() => {
								dispatch(getList(0, option.id));
								history.push({
									pathname: "/",
									search: `?sort=${option.id}`,
								});
							}}
							type="button"
						>
							{option.title_fa}
						</button>
					))}
				</div>
				{/* product list count */}

				<div className="products-page__count">
					<h2>{productsList.resultCount.toLocaleString("en-US")}</h2>
				</div>
			</div>
			{/* product list */}
			<div className="products-page__list">
				{productsList.productsList.map((product) => (
					<ProductBox singleProduct={product} />
				))}
			</div>
		</div>
	);
}

export default ProductList;
