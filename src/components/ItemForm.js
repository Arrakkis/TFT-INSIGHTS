import React from "react";
import "../css/App.css";

class ItemForm extends React.Component {
	state = {
		active: false
	};

	handleClick = () => {
		let newState = { ...this.state };
		newState.active = !newState.active;
		this.setState(newState);
	};

	render() {
		let containerClass = "tier-container";
		let currentTraitTiers = [];
		let slotClass = "champion-item-slot";
		let spinnerClass = "spinner";

		if (this.props.trait !== "") {
			spinnerClass = "spinner-active";
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
						style={this.props.traitIconStyle}
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
