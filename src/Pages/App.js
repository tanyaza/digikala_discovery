import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductList from "./ProductList";
import DetailPage from "./DetailPage";
function App() {
	const routes = [
		{ route: "/", component: <ProductList /> },
		{ route: "/product/:id", component: <DetailPage /> },
	];
	return (
		<>
			<Helmet>
				<title>Digikala Discovery</title>
			</Helmet>
			<Router>
				<Switch>
					{routes.map((route) => (
						<Route exact={route.route === "/"} path={route.route}>
							{route.component}
						</Route>
					))}
				</Switch>
			</Router>
		</>
	);
}

export default App;
