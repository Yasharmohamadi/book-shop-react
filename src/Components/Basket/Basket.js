import React from "react";
import "./Basket.css";

export default class Basket extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2 className="basket_title hidden">سبد خرید</h2>
				<section className="basket hidden">
					<table className="basket_table">
						<thead>
							<tr>
								<th>عکس کالا</th>
								<th>نام کالا</th>
								<th>قیمت</th>
								<th>تعداد</th>
								<th>حذف</th>
							</tr>
						</thead>
						<tbody className="tbody">
                            {this.props.props.map((product) => (
							<tr key={product.id} className="goods_rows">
								<td>
									<img className="basket_img" src={product.src}></img>
								</td>
								<td>{this.name}</td>
								<td className="basket_price_container">
									<p className="basket_num">{product.price}</p>
									<p className="basket_unit">تومان</p>
								</td>
								<td>
									<input
										className="basket_input"
										type="number"
										min="1"
										max="9"
                                        value={product.count}
									></input>
								</td>
								<td>
									<button className="basket_del_button">حذف</button>
								</td>
							</tr>
                            ))}

							<tr className="end_row">
								<td className="final_price" colSpan="3">
									<span className="final_num"></span>
									<span className="final_unit">تومان</span>
								</td>
								<td className="final_btn" colSpan="1">
									<button className="final_basket_empty">خالی کردن سبد</button>
								</td>
								<td className="final_btn" colSpan="2">
									<button className="final_btn_elem">نهایی کردن خرید</button>
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}
