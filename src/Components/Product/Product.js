import React from "react";
import "./Product.css";
import Basket from '../Basket/Basket'

export default class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allProducts: [
				{
					id: 1,
					name: "توپ های ماه اوت",
					price: "180000",
					src: "./img/toophaye-mahe-ot.jpeg",
					count: 1,
				},
				{
					id: 2,
					name: "استالین",
					price: "210000",
					src: "./img/estalin.webp",
					count: 1,
				},
				{
					id: 3,
					name: "ورشو 1920",
					price: "160000",
					src: "./img/varsho.jpg",
					count: 1,
				},
				{
					id: 4,
					name: "صلحی که همه صلح هارا",
					price: "150000",
					src: "./img/solhi-ke.jpg",
					count: 1,
				},
				{
					id: 5,
					name: "شاهنشاه",
					price: "280000",
					src: "./img/shahanshah.webp",
					count: 1,
				},
				{
					id: 6,
					name: "سلام اول",
					price: "220000",
					src: "./img/salame-aval.webp",
					count: 1,
				},
				{
					id: 7,
					name: "خاطرات یک ابله سیاسی",
					price: "170000",
					src: "./img/khaterat.webp",
					count: 1,
				},
				{
					id: 8,
					name: "جاسوسی که سقوط کرد",
					price: "200000",
					src: "./img/jasoosi.webp",
					count: 1,
				},
				{
					id: 9,
					name: "به سوی ایستگاه فنلاند",
					price: "130000",
					src: "./img/be-soye-istgah.webp",
					count: 1,
				},
			],
			basketProducts: [],
		};

		this.emptyBasket = this.emptyBasket.bind(this)
	}

	addToBasketHnadler(product, productID) {

		let hasProduct = this.state.basketProducts.some((product) => {
			return product.id === productID;

		});
		if (hasProduct) {
			product.count++;
			this.setState({
				basketProducts: [...this.state.basketProducts],
			});

		} else {

			this.setState({
				basketProducts: [...this.state.basketProducts, product],
			});
		}

	}

	emptyBasket () {
		this.setState({
			basketProducts: []
		})
	}

	removeProduct (id) {
		// console.log(this.state.basketProducts);


		let basketItems = this.state.basketProducts

		let targetItem = basketItems.filter((item) => {
			 return item.id !== id;
		})

		console.log(targetItem);

		this.setState({
			basketProducts: targetItem
		})

		// this.state.basketProducts
	}

	render() {
		return (
			<div>
				<h2 className="items_title">کالا ها</h2>
				<section className="items">
					{this.state.allProducts.map((product) => (
						<div className="item" key={product.id}>
							<img className="item_image" src={product.src}></img>
							<h3 className="item_title">{product.name}</h3>
							<div className="item_price_container">
								<p className="item_price">{product.price}</p>
								<span className="item_unit">تومان</span>
							</div>
							<button
								onClick={this.addToBasketHnadler.bind(
									this,
									product,
									product.id
								)}
								className="item_btn"
							>
								افزودن به سبد خرید
							</button>
						</div>
					))}
				</section>
				<Basket props={this.state.basketProducts} onEmpty={this.emptyBasket} onRemove={this.removeProduct.bind(this)}/>
			</div>
		);
	}
}
