import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";

class Champions extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={0} />
				<div className="background1"></div>
			</span>
		);
	}
}

export default Champions;
