import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
// FIRST WAY TO USE REACT
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.Fragment>
		<Header />
		<Product />
		<Basket />
	</React.Fragment>
);
