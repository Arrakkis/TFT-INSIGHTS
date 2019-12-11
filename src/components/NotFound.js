import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} />
				<div className="background1"></div>
				<h1>Sorry, this page doesn't exist.</h1>
			</span>
		);
	}
}

export default NotFound;
