import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Profile from "./Profile";
import Analytics from "./Analytics";
import Builds from "./Builds";
import About from "./About";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/profile" component={Profile} />
			<Route exact path="/analytics" component={Analytics} />
			<Route exact path="/builds" component={Builds} />
			<Route exact path="/about" component={About} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
