import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../store/actions";
import protectedIcon from "../../assets/icons/protected.png";
import coinIcon from "../../assets/icons/coin.svg";
import truckIcon from "../../assets/icons/truck.svg";
import "./index.scss";

function DetailPage() {
	let params = useParams();
	const dispatch = useDispatch();
	const productData = useSelector((state) => state.detailData);

	useEffect(() => {
		dispatch(getDetail(params.id));
	}, []);

	return (
		<div className="detail-page">
			{!productData.loading ? (
				<div className="detail-page__container">
					<div className="detail-page__image">
						<img
							className="detail-page__mainImg"
							src={productData.product.images.main.url}
						/>
						<div className="detail-page__imagesContainer">
							{productData.product.images.list.map((image) => (
								<div>
									<img src={image.url} />
								</div>
							))}
						</div>
					</div>

					<div className="detail-page__info">
						<div className="detail-page__titleContainer">
							<div className="detail-page__title">
								<img src={productData.product.brand.logo.url} />
								<h1>{productData.product.title_fa}</h1>
							</div>

							<span className="detail-page__entitle">
								{productData.product.title_en}
							</span>
						</div>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div className="detail-page__infoSection">
								<div>
									<p className="detail-page__suggestion">
										{productData.product.suggestion.percentage}% (
										{productData.product.suggestion.count}) نفر از خریداران، این
										کالا را پیشنهاد کرده اند
									</p>
								</div>
								<div className="detail-page__features">
									<h3>ویژگی ها</h3>
									<div className="detail-page__manufacture">
										قیمت تولید کننده:
										<span>
											{" "}
											{productData.product.default_variant.price.selling_price.toLocaleString(
												"en-US"
											)}
											ریال
										</span>
									</div>
								</div>
								<div className="detail-page__freeShipping">
									<div>
										<span> ارسال رایگان</span>
										<p>برای سفارش بالای ۵۰۰ هزارتومان</p>
									</div>
									<img src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg" />
								</div>
							</div>
							<div className="product-infoBox">
								<h1>فروشنده</h1>
								<div className="product-infoBox__firstRow">
									<div className="product-infoBox__seller">
										<img src="https://www.digikala.com/statics/img/png/footerLogo.png" />
										دیجی کالا
									</div>
									<div className="product-infoBox__revenue">
										<div>
											<span className="product-infoBox__greenTxt">87.2%</span>
											رضایت از کالا
										</div>
										<div>
											عملکرد
											<span className="product-infoBox__greenTxt">عالی</span>
										</div>
									</div>
								</div>
								<div className="product-infoBox__secondRow">
									<img src={protectedIcon} />
									<p>گارانتی اصالت و سلامت فیزیکی کالا</p>
								</div>
								<div className="product-infoBox__thirdRow">
									<img src={coinIcon} />
									<p>۳ امتیاز دیجی‌کلاب</p>
								</div>
								<div className="product-infoBox__forthRow">
									<h2>موجود در انبار دیجی کالا</h2>
									<div>
										<div className="product-infoBox__delivery">
											<img style={{ color: "red" }} src={truckIcon} />
											<span>ارسال دیجی‌کالا</span>
										</div>
										<div className="product-infoBox__delivery">
											<img style={{ color: "green" }} src={truckIcon} />
											<span>ارسال سریع سوپرمارکتی دیجی‌کالا</span>
										</div>
									</div>
								</div>
								<div className="product-infoBox__lastRow">
									<div className="product-infoBox__price">
										<span>قیمت مصرف‌کننده</span>
										<div>
											{productData.product.default_variant.price.selling_price.toLocaleString(
												"en-US"
											)}
											ریال
										</div>
									</div>
									<button type="button">افزودن به سبد خرید</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default DetailPage;
