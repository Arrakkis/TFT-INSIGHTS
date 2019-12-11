import React from "react";
import "../css/App.css";
import TierForm from "./TierForm";
import cloud from "../css/Images/Traits/cloud.png";
import crystal from "../css/Images/Traits/crystal.png";
import desert from "../css/Images/Traits/desert.png";
import electric from "../css/Images/Traits/electric.png";
import glacial from "../css/Images/Traits/glacial.png";
import inferno from "../css/Images/Traits/inferno.png";
import light from "../css/Images/Traits/light.png";
import mountain from "../css/Images/Traits/mountain.png";
import ocean from "../css/Images/Traits/ocean.png";
import poison from "../css/Images/Traits/poison.png";
import shadow from "../css/Images/Traits/shadow.png";
import steel from "../css/Images/Traits/steel.png";
import woodland from "../css/Images/Traits/woodland.png";
import alchemist from "../css/Images/Traits/alchemist.png";
import assassin from "../css/Images/Traits/assassin.png";
import avatar from "../css/Images/Traits/avatar.png";
import berserker from "../css/Images/Traits/berserker.png";
import blademaster from "../css/Images/Traits/blademaster.png";
import druid from "../css/Images/Traits/druid.png";
import mage from "../css/Images/Traits/mage.png";
import mystic from "../css/Images/Traits/mystic.png";
import predator from "../css/Images/Traits/predator.png";
import ranger from "../css/Images/Traits/ranger.png";
import summoner from "../css/Images/Traits/summoner.png";
import warden from "../css/Images/Traits/warden.png";
import empty from "../css/Images/Traits/empty.png";

class TraitForm extends React.Component {
	state = {
		slot: { activeMenu: "" }
	};

	handlePlateSelect = trait => {
		let newState = { ...this.state };
		newState.slot.activeMenu = "";
		this.setState(newState);
		this.props.handleTraitChange(this.props.slot, trait);
	};

	handleChange = entry => {
		let newState = { ...this.state };
		if (newState.slot.activeMenu === entry) {
			newState.slot.activeMenu = "";
		} else {
			newState.slot.activeMenu = entry;
		}
		this.setState(newState);
	};

	render() {
		const iconLookup = {
			"": empty,
			cloud,
			crystal,
			desert,
			electric,
			glacial,
			inferno,
			light,
			mountain,
			ocean,
			poison,
			shadow,
			steel,
			woodland,
			alchemist,
			assassin,
			avatar,
			berserker,
			blademaster,
			druid,
			mage,
			mystic,
			predator,
			ranger,
			summoner,
			warden
		};

		var traitSlotStyle = {
			position: "absolute",
			backgroundImage: `url(${iconLookup[this.props.trait]})`
		};

		let backgroundClass = "radial-background";
		let classesContainer = "classes-container container";
		let elementsContainer = "elements-container container";
		let elementsButton = "elements-button";
		let classesButton = "classes-button";
		let spinnerClass = "spinner";

		if (this.state.slot.activeMenu === "classes") {
			classesContainer = "classes-container-active container";
			classesButton = "classes-button-active";
		} else {
			classesContainer = "classes-container container";
			classesButton = "classes-button";
		}

		if (this.state.slot.activeMenu === "elements") {
			elementsContainer = "elements-container-active container";
			elementsButton = "elements-button-active";
		} else {
			elementsContainer = "elements-container container";
			elementsButton = "elements-button";
		}

		if (this.state.slot.activeMenu === "") {
			backgroundClass = "radial-background";
			spinnerClass = "spinner";
		} else {
			backgroundClass = "radial-background-active";
			spinnerClass = "spinner-active";
		}

		let formClass = "selection-table-body-selections-traits";

		if (!this.props.active) {
			formClass = "selection-table-body-selections-traits locked";
		} else {
			formClass = "selection-table-body-selections-traits";
		}

		return (
			<form className={formClass}>
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
							checked={this.state.slot.activeMenu === "elements"}
						/>
						<div className={elementsButton}></div>
					</label>
					<label>
						<input
							className="classes-checkbox"
							type="checkbox"
							onChange={() => this.handleChange("classes")}
							checked={this.state.slot.activeMenu === "classes"}
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
				<TierForm
					handleTierChange={this.props.handleTierChange}
					traitSlotStyle={traitSlotStyle}
					trait={this.props.trait}
					tier={this.props.tier}
					slot={this.props.slot}
				/>
				<div className="selection-clear-container">
					<div
						className="selection-clear"
						onClick={() => {
							this.props.handleTraitClear(this.props.slot);
						}}
					>
						C L E A R
					</div>
				</div>
			</form>
		);
	}
}

export default TraitForm;
