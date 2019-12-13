import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import ChampionTable from "./ChampionTable";

class Champions extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={0} />
				<div className="background1"></div>
				<ChampionTable />
			</span>
		);
	}
}

export default Champions;
