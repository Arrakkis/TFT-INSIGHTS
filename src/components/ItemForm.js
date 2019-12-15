import React from "react";
import "../css/App.css";

class ItemForm extends React.Component {
	state = {
		active: false,
		color: "neutral"
	};

	getSnapshotBeforeUpdate(prevProps, prevState) {
		return prevProps.trait;
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot !== this.props.trait) {
			this.setState({ active: false, color: "neutral" });
		}
	}

	handleClick = () => {
		let newState = { ...this.state };
		newState.active = !newState.active;
		this.setState(newState);
	};

	handlePlateSelect = (value, tierLookup) => {
		let newState = { ...this.state };
		newState.active = !newState.active;
		let reverseTierArray = tierLookup[this.props.trait].reverse();
		if (reverseTierArray[0] === value) {
			newState.color = "gold";
		} else if (reverseTierArray[1] === value) {
			newState.color = "silver";
		} else if (reverseTierArray[2] === value) {
			newState.color = "bronze";
		} else {
			newState.color = "neutral";
		}
		this.props.handleTierChange(this.props.slot, value);
		this.setState(newState);
	};

	render() {
		const tierLookup = {
			cloud: [2, 3, 4],
			crystal: [2, -1, 4],
			desert: [-1, 2, 4],
			electric: [2, 3, 4],
			glacial: [2, 4, 6],
			inferno: [3, 6, 9],
			light: [3, 6, 9],
			mountain: [-1, -2, 2],
			ocean: [2, 4, 6],
			poison: [-1, -2, 3],
			shadow: [-1, 2, 4],
			steel: [2, 3, 4],
			woodland: [-1, -2, 3],
			alchemist: [-1, -2, 1],
			assassin: [-1, 3, 6],
			avatar: [-1, -2, 1],
			berserker: [-1, 3, 6],
			blademaster: [2, 4, 6],
			druid: [-1, -2, 2],
			mage: [-1, 3, 6],
			mystic: [-1, 2, 4],
			predator: [-1, -2, 3],
			ranger: [2, 4, 6],
			summoner: [-1, 3, 6],
			warden: [2, 4, 6]
		};

		let containerClass = "tier-container";
		let currentTraitTiers = [];
		let slotClass = "selection-tier-slot";
		let spinnerClass = "spinner";

		if (this.props.trait) {
			currentTraitTiers = tierLookup[this.props.trait];
		}

		if (this.props.trait !== "") {
			spinnerClass = "spinner-active";
		}

		if (this.state.color === "neutral") {
			slotClass = "selection-tier-slot neutral";
		} else if (this.state.color === "bronze") {
			slotClass = "selection-tier-slot bronze";
		} else if (this.state.color === "silver") {
			slotClass = "selection-tier-slot silver";
		} else if (this.state.color === "gold") {
			slotClass = "selection-tier-slot gold";
		}

		if (this.state.active) {
			containerClass = "tier-container-active";
		} else {
			containerClass = "tier-container";
		}

		return (
			<div className={slotClass}>
				<div className={spinnerClass}></div>
				<label>
					<input
						type="checkbox"
						className="tier-checkbox"
						checked={this.state.active}
						onChange={this.handleClick}
					></input>
					<div
						className="selection-tier-item"
						style={this.props.traitSlotStyle}
					></div>
				</label>
				<div className={containerClass}>
					{currentTraitTiers.map(value => {
						if (value < 0) {
							return (
								<div key={value} className="plate hidden">
									{value}
								</div>
							);
						}
						return (
							<div
								key={value}
								className="plate"
								onClick={event => {
									event.preventDefault();
									this.handlePlateSelect(value, tierLookup);
								}}
							>
								{value}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ItemForm;
