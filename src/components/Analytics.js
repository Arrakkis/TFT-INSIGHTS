import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import SelectionTable from "./SelectionTable";
import TierResults from "./TierResults";

class Analytics extends React.Component {
	state = {
		selectedTime: "30 days",
		selectedRank: "All",
		selectedTraits: {
			slot1: { active: true, trait: "", tier: 0 },
			slot2: { active: false, trait: "", tier: 0 },
			slot3: { active: false, trait: "", tier: 0 }
		},
		results: {
			summoner: {
				3: {
					blademaster: {
						6: {
							inferno: {
								3: { null: { 0: { winrate: 0.55, popularity: 0.34 } } }
							}
						}
					}
				}
			}
		}
	};

	handleRequest = () => {
		fetch("http://127.0.0.1:5000/data")
			.then(res => res.json())
			.then(data => {
				let newState = { ...this.state };
				newState.results = data;
				console.log(data);
				this.setState(newState);
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

	handleTierChange = (slot, tier) => {
		let newState = { ...this.state };
		newState.selectedTraits[slot].tier = tier;
		this.setState(newState);
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
		this.setState(newState);
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
		this.setState(newState);
	};

	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={2} />
				<div className="background1"></div>
				<SelectionTable
					setOptions={this.setOptions}
					selectedTraits={this.state.selectedTraits}
					selectedTime={this.state.selectedTime}
					selectedRank={this.state.selectedRank}
					handleTimeChange={this.handleTimeChange}
					handleRankChange={this.handleRankChange}
					handleTierChange={this.handleTierChange}
					handleTraitChange={this.handleTraitChange}
					handleTraitClear={this.handleTraitClear}
				/>
				<TierResults results={this.state.results} /> {/* DO NOT ENTER */}
				<button onClick={this.handleRequest}>REQUEST ZE DATA</button>
			</span>
		);
	}
}

export default Analytics;
