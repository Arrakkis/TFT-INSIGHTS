import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import ChampionTable from "./ChampionTable";

class Champions extends React.Component {
	state = {
		selectedTime: "30 days",
		selectedRank: "All",
		trait: "",
		champ: ""
	};

	handleTraitChange = trait => {
		let newState = { ...this.state };
		newState.trait = trait;
		newState.champ = "";
		this.setState(newState);
	};

	handleAllClear = () => {
		let newState = { ...this.state };
		newState.trait = "";
		newState.champ = "";
		this.setState(newState);
	};

	handleTimeChange = event => {
		event.persist();
		let newState = { ...this.state };
		newState.selectedTime = event.target.name;
		this.setState(newState);
	};

	handleRankChange = event => {
		event.persist();
		let newState = { ...this.state };
		newState.selectedRank = event.target.name;
		this.setState(newState);
	};

	handleChampionSelection = champion => {
		let newState = { ...this.state };
		newState.champ = champion;
		this.setState(newState);
	};

	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={2} />
				<div className="background1"></div>
				<div className="analysis-header-container">
					<a className="analysis-header" href="/analytics">
						C O M P O S I T I O N S
					</a>
					<a className="analysis-header active" href="/champions">
						C H A M P I O N S
					</a>
					<a className="analysis-header" href="/graphs">
						G R A P H S
					</a>
					<a className="analysis-header" href="/appendix">
						A P P E N D I X
					</a>
				</div>
				<ChampionTable
					champ={this.state.champ}
					selectedTime={this.state.selectedTime}
					selectedRank={this.state.selectedRank}
					handleAllClear={this.handleAllClear}
					handleChampionSelection={this.handleChampionSelection}
					handleTimeChange={this.handleTimeChange}
					handleRankChange={this.handleRankChange}
					handleTraitChange={this.handleTraitChange}
					handleTraitClear={this.handleTraitClear}
					trait={this.state.trait}
				/>
			</span>
		);
	}
}

export default Champions;
