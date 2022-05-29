import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Pages/App";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
