import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";

class Profile extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={4} />
				<div className="background1"></div>
			</span>
		);
	}
}

export default Profile;
