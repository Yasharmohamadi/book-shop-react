import React from "react";
import './Basket.css'

export default class Basket extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2 class="basket_title hidden">سبد خرید</h2>
				<section class="basket hidden">
					<table class="basket_table">
						<thead>
							<tr>
								<th>عکس کالا</th>
								<th>نام کالا</th>
								<th>قیمت</th>
								<th>تعداد</th>
								<th>حذف</th>
							</tr>
						</thead>
						<tbody class="tbody"></tbody>
						<tr class="end_row">
							<td class="final_price" colspan="3">
								<span class="final_num"></span>
								<span class="final_unit">تومان</span>
							</td>
							<td class="final_btn" colspan="1">
								<button class="final_basket_empty">خالی کردن سبد</button>
							</td>
							<td class="final_btn" colspan="2">
								<button class="final_btn_elem">نهایی کردن خرید</button>
							</td>
						</tr>
					</table>
				</section>
			</div>
		);
	}
}
