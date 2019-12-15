import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import logo from "../css/Images/logo2.png";

class About extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={0} />
				<div className="background1"></div>
				<img
					alt="TFT.INSIGHTS logo"
					src={logo}
					className="tft-insights-logo-1"
				/>
			</span>
		);
	}
}

export default About;
