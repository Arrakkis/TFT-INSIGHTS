import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";

class NotFound extends React.Component {
	render() {
		return (
			<span>
				<NavBar history={this.props.history} />
				<div className="background1"></div>
				<h1>Sorry, this page doesn't exist.</h1>
			</span>
		);
	}
}

export default NotFound;
