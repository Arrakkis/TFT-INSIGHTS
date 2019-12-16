import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import ChampionTable from "./ChampionTable";

class Champions extends React.Component {
	state = {
		selectedTime: "30 days",
		selectedRank: "All",
		trait: ""
	};

	handleTraitChange = (slot, trait) => {
		let newState = { ...this.state };
		newState.selectedTraits[slot].trait = trait;
		if (slot === "slot1") {
			newState.selectedTraits.slot2.active = true;
		}
		if (slot === "slot2") {
			newState.selectedTraits.slot3.active = true;
		}
		this.setState(newState, () => {
			this.handleFilterChange();
		});
	};

	handleTraitClear = slot => {
		let newState = { ...this.state };
		newState.selectedTraits[slot].trait = "";
		newState.selectedTraits[slot].tier = 0;
		if (slot === "slot1") {
			newState.selectedTraits.slot2.active = false;
			newState.selectedTraits.slot2.trait = "";
			newState.selectedTraits.slot2.tier = 0;
			newState.selectedTraits.slot3.active = false;
			newState.selectedTraits.slot3.trait = "";
			newState.selectedTraits.slot3.tier = 0;
		}
		if (slot === "slot2") {
			newState.selectedTraits.slot3.active = false;
			newState.selectedTraits.slot3.trait = "";
			newState.selectedTraits.slot3.tier = 0;
		}
		this.setState(newState, () => {
			this.handleFilterChange();
		});
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

	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={0} />
				<div className="background1"></div>
				<div className="analysis-header-container">
					<a className="analysis-header" href="/analytics">
						C O M P O S I T I O N S
					</a>
					<a className="analysis-header active" href="/champions">
						C H A M P I O N S
					</a>
				</div>
				<ChampionTable
					selectedTime={this.state.selectedTime}
					selectedRank={this.state.selectedRank}
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
