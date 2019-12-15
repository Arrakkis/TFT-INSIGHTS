import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import SelectionTable from "./SelectionTable";
import TierResults from "./TierResults";
import { orderBy } from "lodash";
import { tierValueOrder } from "../helpers";

class Analytics extends React.Component {
	state = {
		selectedTime: "30 days",
		selectedRank: "All",
		selectedTraits: {
			slot1: { active: true, trait: "", tier: 0 },
			slot2: { active: false, trait: "", tier: 0 },
			slot3: { active: false, trait: "", tier: 0 }
		},
		activeMenu: ""
	};

	componentDidMount() {
		let data = require("../result.json");
		let newState = { ...this.state };
		let newData = [];
		let i = 0;
		for (const trait1 in data) {
			for (const tier1 in data[trait1]) {
				for (const trait2 in data[trait1][tier1]) {
					for (const tier2 in data[trait1][tier1][trait2]) {
						for (const trait3 in data[trait1][tier1][trait2][tier2]) {
							for (const tier3 in data[trait1][tier1][trait2][tier2][trait3]) {
								for (const trait4 in data[trait1][tier1][trait2][tier2][trait3][
									tier3
								]) {
									for (const tier4 in data[trait1][tier1][trait2][tier2][
										trait3
									][tier3][trait4]) {
										i = i + 1;
										newData[i] = {
											traits: [
												{
													trait: trait1,
													tier: tier1,
													tierValue: tierValueOrder[trait1][tier1]
												},
												{
													trait: trait2,
													tier: tier2,
													tierValue: tierValueOrder[trait2][tier2]
												},
												{
													trait: trait3,
													tier: tier3,
													tierValue: tierValueOrder[trait3][tier3]
												},
												{
													trait: trait4,
													tier: tier4,
													tierValue: tierValueOrder[trait4][tier4]
												}
											],
											popularity:
												data[trait1][tier1][trait2][tier2][trait3][tier3][
													trait4
												][tier4].popularity,
											winrate:
												data[trait1][tier1][trait2][tier2][trait3][tier3][
													trait4
												][tier4].winrate
										};
										newData[i].traits = orderBy(
											newData[i].traits,
											["tierValue", "trait"],
											["desc", "asc"]
										);
									}
								}
							}
						}
					}
				}
			}
		}
		newData = orderBy(newData, "winrate", "desc");
		newData = newData.filter(item => item !== undefined);
		newState.results = newData;
		newState.filteredResults = newData;
		this.setState(newState);
	}

	handleFilterChange = () => {
		let newState = { ...this.state };
		let newResults = this.state.results.slice();
		let filters = { traits: [], tiers: [] };
		filters.traits.push(
			this.state.selectedTraits.slot1.trait,
			this.state.selectedTraits.slot2.trait,
			this.state.selectedTraits.slot3.trait
		);
		filters.tiers.push(
			this.state.selectedTraits.slot1.tier,
			this.state.selectedTraits.slot2.tier,
			this.state.selectedTraits.slot3.tier
		);
		filters.traits = filters.traits.filter(trait =>
			trait !== "" ? true : false
		);
		filters.tiers = filters.tiers.filter(tier => (tier !== 0 ? true : false));
		newResults = newResults.filter(result => {
			let status = true;
			let j = 0;
			for (let i = 0; i < filters.traits.length; i++) {
				status = false;
				for (const resultTrait in Object.values(result.traits)) {
					if (result.traits[resultTrait].trait === filters.traits[i]) {
						if (
							filters.tiers.length === 0 ||
							filters.tiers.length <= j ||
							Number.parseInt(result.traits[resultTrait].tier) ===
								filters.tiers[j]
						) {
							status = true;
							break;
						}
						break;
					}
				}
				if (status === false) {
					break;
				}
				j = j + 1;
			}
			return status;
		});
		newState.filteredResults = newResults;
		this.setState(newState);
	};

	reOrderBy = (column, order) => {
		let newState = { ...this.state };
		let newResults = this.state.results.slice();
		newResults = orderBy(newResults, column, order);
		newResults = newResults.filter(item => item !== undefined);
		newState.results = newResults;
		this.setState(newState);
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
		this.setState(newState, () => {
			this.handleFilterChange();
		});
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
				<TierResults
					results={this.state.filteredResults}
					reOrderBy={this.reOrderBy}
				/>
				<button onClick={this.handleRequest}>REQUEST ZE DATA</button>
			</span>
		);
	}
}

export default Analytics;
