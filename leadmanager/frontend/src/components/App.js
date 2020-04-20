import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Home from "./workouts/Home";
import store from "../store";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alert from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
	timeout: 3000,
	position: "top center",
};

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Router>
						<Fragment>
							<Header />
							<Alert />
							<div className="container">
								<Switch>
									<PrivateRoute
										exact
										path="/"
										component={Home}
									/>
									<Route
										exact
										path="/register"
										component={Register}
									/>
									<Route
										exact
										path="/login"
										component={Login}
									/>
								</Switch>
							</div>
						</Fragment>
					</Router>
				</AlertProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
