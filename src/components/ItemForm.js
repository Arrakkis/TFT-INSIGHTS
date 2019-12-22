import React from "react";
import "../css/App.css";

class ItemForm extends React.Component {
	state = {
		activeMenu: ""
	};

	handleClick = () => {
		let newState = { ...this.state };
		newState.active = !newState.active;
		this.setState(newState);
	};

	render() {
		let containerClass = "tier-container";
		let slotClass = "champion-item-slot";
		let spinnerClass = "spinner";
		let backgroundClass = "radial-background";
		let elementsButton = "";
		let classesButton = "";
		let classesContainer = "";
		let elementsContainer = "";

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
				<label className="main">
					<div className={backgroundClass}>
						<div className="radial-background-mask"></div>
					</div>
					<div className={spinnerClass}></div>
					<label>
						<input
							className="elements-checkbox"
							type="checkbox"
							onChange={() => this.handleChange("elements")}
							checked={this.state.activeMenu === "elements"}
						/>
						<div className={elementsButton}></div>
					</label>
					<label>
						<input
							className="classes-checkbox"
							type="checkbox"
							onChange={() => this.handleChange("classes")}
							checked={this.state.activeMenu === "classes"}
						/>
						<div className={classesButton}></div>
					</label>
					<div className={classesContainer}>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("alchemist");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("assassin");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("avatar");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("berserker");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("blademaster");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("druid");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("mage");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("mystic");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("predator");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("ranger");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("summoner");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("warden");
							}}
						></div>
					</div>
					<div className={elementsContainer}>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("cloud");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("crystal");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("desert");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("electric");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("glacial");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("inferno");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("light");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("mountain");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("ocean");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("poison");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("shadow");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("steel");
							}}
						></div>
						<div
							className="plate"
							onClick={event => {
								event.preventDefault();
								this.handlePlateSelect("woodland");
							}}
						></div>
					</div>
				</label>
			</div>
		);
	}
}

export default ItemForm;
