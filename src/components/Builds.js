import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

class Builds extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={3} />
				<div className="background1"></div>
			</span>
		);
	}
}

export default Builds;
