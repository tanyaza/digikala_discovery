import React from "react";
import "./index.scss";
import star from "../../assets/icons/star.png";

export default function ProductBox({ singleProduct }) {
	return (
		<div className="product-box">
			<a href={`/product/${singleProduct.id}`}>
				<div className="product-box__img">
					<img src={singleProduct.images.main.url} />
				</div>
				<div className="product-box__info">
					<div className="product-box__firstRow">
						<h3 className="product-box__title">{singleProduct.title_fa}</h3>
					</div>
					<div className="product-box__rateContainer">
						<div className="product-box__rate">
							<span>{singleProduct.default_variant.seller.stars}</span>
							<img src={star} />
						</div>
					</div>
					<div className="product-box__thirdRow">
						<span className="product-box__price">
							{singleProduct.default_variant.price.selling_price.toLocaleString(
								"en-US"
							)}
							ریال
						</span>
					</div>
				</div>
			</a>
		</div>
	);
}
