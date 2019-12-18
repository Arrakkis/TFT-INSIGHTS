import React from "react";
import "../css/App.css";
import aatrox from "../css/Images/Champions/Aatrox.png";
import amumu from "../css/Images/Champions/Amumu.png";
import annie from "../css/Images/Champions/Annie.png";
import ashe from "../css/Images/Champions/Ashe.png";
import azir from "../css/Images/Champions/Azir.png";
import brand from "../css/Images/Champions/Brand.png";
import braum from "../css/Images/Champions/Braum.png";
import diana from "../css/Images/Champions/Diana.png";
import drmundo from "../css/Images/Champions/DrMundo.png";
import ezreal from "../css/Images/Champions/Ezreal.png";
import ivern from "../css/Images/Champions/Ivern.png";
import janna from "../css/Images/Champions/Janna.png";
import jax from "../css/Images/Champions/Jax.png";
import khazix from "../css/Images/Champions/Khazix.png";
import kindred from "../css/Images/Champions/Kindred.png";
import kogmaw from "../css/Images/Champions/KogMaw.png";
import leblanc from "../css/Images/Champions/Leblanc.png";
import lux from "../css/Images/Champions/Lux.png";
import malphite from "../css/Images/Champions/Malphite.png";
import malzahar from "../css/Images/Champions/Malzahar.png";
import maokai from "../css/Images/Champions/Maokai.png";
import masteryi from "../css/Images/Champions/MasterYi.png";
import nami from "../css/Images/Champions/Nami.png";
import nasus from "../css/Images/Champions/Nasus.png";
import nautilus from "../css/Images/Champions/Nautilus.png";
import neeko from "../css/Images/Champions/Neeko.png";
import nocturne from "../css/Images/Champions/Nocturne.png";
import olaf from "../css/Images/Champions/Olaf.png";
import ornn from "../css/Images/Champions/Ornn.png";
import qiyana from "../css/Images/Champions/Qiyana.png";
import reksai from "../css/Images/Champions/RekSai.png";
import renekton from "../css/Images/Champions/Renekton.png";
import singed from "../css/Images/Champions/Singed.png";
import sion from "../css/Images/Champions/Sion.png";
import sivir from "../css/Images/Champions/Sivir.png";
import skarner from "../css/Images/Champions/Skarner.png";
import soraka from "../css/Images/Champions/Soraka.png";
import syndra from "../css/Images/Champions/Syndra.png";
import taliyah from "../css/Images/Champions/Taliyah.png";
import taric from "../css/Images/Champions/Taric.png";
import thresh from "../css/Images/Champions/Thresh.png";
import twitch from "../css/Images/Champions/Twitch.png";
import varus from "../css/Images/Champions/Varus.png";
import vayne from "../css/Images/Champions/Vayne.png";
import veigar from "../css/Images/Champions/Veigar.png";
import vladimir from "../css/Images/Champions/Vladimir.png";
import volibear from "../css/Images/Champions/Volibear.png";
import warwick from "../css/Images/Champions/Warwick.png";
import yasuo from "../css/Images/Champions/Yasuo.png";
import yorick from "../css/Images/Champions/Yorick.png";
import zed from "../css/Images/Champions/Zed.png";
import zyra from "../css/Images/Champions/Zyra.png";
import empty from "../css/Images/Champions/empty.png";
import karma from "../css/Images/Champions/Karma.png";
import leona from "../css/Images/Champions/Leona.png";
import senna from "../css/Images/Champions/Senna.png";

class ChampionSelector extends React.Component {
	state = {
		active: false
	};

	handleClick = () => {
		let newState = { ...this.state };
		newState.active = !newState.active;
		this.setState(newState);
	};

	handlePlateSelect = champion => {
		let newState = { ...this.state };
		newState.active = !newState.active;
		this.setState(newState, () => this.props.handleChampionSelection(champion));
	};

	render() {
		const championIconLookup = {
			"": empty,
			aatrox,
			amumu,
			annie,
			ashe,
			azir,
			brand,
			braum,
			diana,
			drmundo,
			ezreal,
			ivern,
			janna,
			jax,
			karma,
			khazix,
			kindred,
			kogmaw,
			leblanc,
			leona,
			lux,
			malphite,
			malzahar,
			maokai,
			masteryi,
			nami,
			nasus,
			nautilus,
			neeko,
			nocturne,
			olaf,
			ornn,
			qiyana,
			reksai,
			renekton,
			singed,
			sion,
			sivir,
			skarner,
			soraka,
			syndra,
			taliyah,
			taric,
			thresh,
			twitch,
			varus,
			vayne,
			veigar,
			vladimir,
			volibear,
			warwick,
			yasuo,
			yorick,
			zed,
			zyra
		};

		const championTierLookup = {
			"": 0,
			aatrox: 3,
			amumu: 5,
			annie: 4,
			ashe: 4,
			azir: 2,
			brand: 4,
			braum: 2,
			diana: 1,
			drmundo: 3,
			ezreal: 3,
			ivern: 1,
			janna: 4,
			jax: 3,
			khazix: 4,
			kindred: 3,
			kogmaw: 1,
			leblanc: 2,
			lux: 5,
			malphite: 4,
			malzahar: 2,
			maokai: 1,
			masteryi: 5,
			nami: 5,
			nasus: 1,
			nautilus: 3,
			neeko: 2,
			nocturne: 3,
			olaf: 4,
			ornn: 1,
			qiyana: 3,
			reksai: 2,
			renekton: 1,
			singed: 5,
			sion: 3,
			sivir: 3,
			skarner: 2,
			soraka: 3,
			syndra: 2,
			taliyah: 1,
			taric: 5,
			thresh: 2,
			twitch: 4,
			varus: 2,
			vayne: 1,
			veigar: 3,
			vladimir: 1,
			volibear: 2,
			warwick: 1,
			yasuo: 2,
			yorick: 4,
			zed: 5,
			zyra: 1,
			senna: 2,
			karma: 0,
			leona: 0
		};

		const championTraitLookup = {
			"": [],
			cloud: ["janna", "yasuo", "qiyana"],
			crystal: ["ashe", "skarner", "taric"],
			desert: ["azir", "khazix", "renekton", "sivir"],
			electric: ["ornn", "volibear", "zed"],
			glacial: ["braum", "ezreal", "olaf", "volubear", "warwick"],
			inferno: [
				"qiyana",
				"amumu",
				"annie",
				"brand",
				"diana",
				"kindred",
				"varus",
				"zyra"
			],
			light: ["aatrox", "jax", "lucian", "nasus", "soraka", "vayne", "yorick"],
			mountain: ["qiyana", "malphite", "taliyah"],
			ocean: ["qiyana", "nami", "nautilus", "syndra", "thresh", "vladimir"],
			poison: ["drmundo", "kogmaw", "singed", "twitch"],
			shadow: ["kindred", "malzahar", "masteryi", "senna", "sion", "veigar"],
			steel: ["nocturne", "reksai"],
			woodland: ["ivern", "leblanc", "maokai", "neeko"],
			alchemist: ["singed"],
			assassin: ["diana", "leblanc", "khazhix", "nocturne", "qiyana", "zed"],
			avatar: ["lux"],
			berserker: ["drmundo", "jax", "olaf", "renekton", "sion", "volibear"],
			blademaster: ["aatrox", "masteryi", "sivir", "yasuo"],
			druid: ["ivern", "maokai", "neeko"],
			mage: ["brand", "leblanc", "syndra", "taliyah", "veigar", "vladimir"],
			mystic: ["janna", "karma", "masteryi", "nami", "soraka", "karma"],
			predator: ["kogmaw", "reksai", "skarner", "warwick"],
			ranger: ["ashe", "ezreal", "kindred", "twitch", "varus", "vayne"],
			summoner: ["annie", "azir", "malzahar", "yorick", "zed", "zyra"],
			warden: [
				"amumu",
				"braum",
				"leona",
				"malphite",
				"nasus",
				"nautilus",
				"ornn",
				"taric",
				"thresh"
			]
		};

		let containerClass = "champion-container";
		let slotClass = "selection-tier-slot";
		let spinnerClass = "spinner";
		let backgroundClass = "radial-background";

		if (this.props.trait !== "") {
			spinnerClass = "spinner-active";
		}

		if (this.state.active && this.props.trait !== "") {
			backgroundClass = "radial-background-active";
			containerClass = "champion-container active";
		} else {
			backgroundClass = "radial-background";
			containerClass = "champion-container";
		}
		let boxShadowColorByTier = {
			0: "#c7aa6f",
			1: "silver",
			2: "#22881e",
			3: "cornflowerblue",
			4: "mediumvioletred",
			5: "gold"
		};

		let selectedStyle = {
			backgroundImage: `url(${championIconLookup[this.props.champ]})`,
			boxShadow: `0px 0px 1px 3px ${
				boxShadowColorByTier[championTierLookup[this.props.champ]]
			} inset`
		};

		if (this.props.champ === "") {
			selectedStyle = this.props.traitIconStyle;
		}
		let i = 0;

		return (
			<div className={slotClass}>
				<div className={spinnerClass}></div>
				<div className={backgroundClass}>
					<div className="radial-background-mask"></div>
				</div>
				<label>
					<input
						type="checkbox"
						className="tier-checkbox"
						checked={this.state.active}
						onChange={this.handleClick}
					></input>
					<div className="selection-tier-item" style={selectedStyle}></div>
				</label>
				<div className={containerClass}>
					{championTraitLookup[this.props.trait].map(champion => {
						i = i + 1;
						return (
							<div
								key={i}
								className="champion-selector-plate"
								style={{
									backgroundImage: `url(${championIconLookup[champion]})`,
									boxShadow: `0px 0px 1px 4px ${
										boxShadowColorByTier[championTierLookup[champion]]
									}`
								}}
								onClick={() => this.handlePlateSelect(champion)}
							></div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ChampionSelector;
