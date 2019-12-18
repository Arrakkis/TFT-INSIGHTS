import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Profile from "./Profile";
import Analytics from "./Analytics";
import Champions from "./Champions";
import About from "./About";
import Appendix from "./Appendix";
import Graphs from "./Graphs";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/profile/:region/:profileId" component={Profile} />
			<Route exact path="/analytics" component={Analytics} />
			<Route exact path="/champions" component={Champions} />
			<Route exact path="/about" component={About} />
			<Route exact path="/appendix" component={Appendix} />
			<Route exact path="/graphs" component={Graphs} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
