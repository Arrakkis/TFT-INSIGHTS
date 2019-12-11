import React from "react";
import "../css/App.css";
import { ratioToPercentage } from "../helpers";
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

class TierResults extends React.Component {
	render() {
		const iconLookup = {
			null: empty,
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

		const tierLookup = {
			null: { 0: "neutral" },
			cloud: { 2: "bronze", 3: "silver", 4: "gold" },
			crystal: { 2: "bronze", 4: "gold" },
			desert: { 2: "bronze", 4: "gold" },
			electric: { 2: "bronze", 3: "silver", 4: "gold" },
			glacial: { 2: "bronze", 4: "silver", 6: "gold" },
			inferno: { 3: "bronze", 6: "silver", 9: "gold" },
			light: { 3: "bronze", 6: "silver", 9: "gold" },
			mountain: { 2: "gold" },
			ocean: { 2: "bronze", 4: "silver", 6: "gold" },
			poison: { 3: "gold" },
			shadow: { 2: "bronze", 4: "gold" },
			steel: { 2: "bronze", 3: "silver", 4: "gold" },
			woodland: { 3: "gold" },
			alchemist: { 1: "gold" },
			assassin: { 3: "bronze", 6: "gold" },
			avatar: { 1: "gold" },
			berserker: { 3: "bronze", 6: "gold" },
			blademaster: { 2: "bronze", 4: "silver", 6: "gold" },
			druid: { 2: "gold" },
			mage: { 3: "bronze", 6: "gold" },
			mystic: { 2: "bronze", 4: "gold" },
			predator: { 3: "gold" },
			ranger: { 2: "bronze", 4: "silver", 6: "gold" },
			summoner: { 3: "bronze", 6: "gold" },
			warden: { 2: "bronze", 4: "silver", 6: "gold" }
		};

		let i = 0;

		return (
			<div className="results-table-container">
				<table className="results-table">
					<thead className="results-table-header">
						<tr className="results-table-header-row">
							<th className="results-table-header-head">T R A I T S</th>
							<th className="results-table-header-head">P O P U L A R I T Y</th>
							<th className="results-table-header-head">C H A M P I O N S</th>
							<th className="results-table-header-head">W I N R A T E</th>
						</tr>
					</thead>
					<tbody className="results-table-body">
						{Object.keys(this.props.results).map(trait1 => {
							return Object.keys(this.props.results[trait1]).map(tier1 => {
								return Object.keys(this.props.results[trait1][tier1]).map(
									trait2 => {
										return Object.keys(
											this.props.results[trait1][tier1][trait2]
										).map(tier2 => {
											return Object.keys(
												this.props.results[trait1][tier1][trait2][tier2]
											).map(trait3 => {
												return Object.keys(
													this.props.results[trait1][tier1][trait2][tier2][
														trait3
													]
												).map(tier3 => {
													return Object.keys(
														this.props.results[trait1][tier1][trait2][tier2][
															trait3
														][tier3]
													).map(trait4 => {
														return Object.keys(
															this.props.results[trait1][tier1][trait2][tier2][
																trait3
															][tier3][trait4]
														).map(tier4 => {
															i = i + 1;
															return (
																<tr key={i} className="results-table-body-row">
																	<td className="results-table-body-trait">
																		<div
																			className={
																				"results-table-body-trait-slot " +
																				tierLookup[trait1][tier1]
																			}
																		>
																			<div
																				className="results-table-body-trait-item"
																				style={{
																					backgroundImage: `url(${iconLookup[trait1]})`
																				}}
																			></div>
																		</div>
																		<div
																			className={
																				"results-table-body-trait-slot " +
																				tierLookup[trait2][tier2]
																			}
																		>
																			<div
																				className="results-table-body-trait-item"
																				style={{
																					backgroundImage: `url(${iconLookup[trait2]})`
																				}}
																			></div>
																		</div>
																		<div
																			className={
																				"results-table-body-trait-slot " +
																				tierLookup[trait3][tier3]
																			}
																		>
																			<div
																				className="results-table-body-trait-item"
																				style={{
																					backgroundImage: `url(${iconLookup[trait3]})`
																				}}
																			></div>
																		</div>
																		<div
																			className={
																				"results-table-body-trait-slot " +
																				tierLookup[trait4][tier4]
																			}
																		>
																			<div
																				className="results-table-body-trait-item"
																				style={{
																					backgroundImage: `url(${iconLookup[trait4]})`
																				}}
																			></div>
																		</div>
																	</td>
																	<td className="results-table-body-popularity">
																		{ratioToPercentage(
																			this.props.results[trait1][tier1][trait2][
																				tier2
																			][trait3][tier3][trait4][tier4].popularity
																		)}
																	</td>
																	<td className="results-table-body-champions"></td>
																	<td className="results-table-body-winrate">
																		{ratioToPercentage(
																			this.props.results[trait1][tier1][trait2][
																				tier2
																			][trait3][tier3][trait4][tier4].winrate
																		)}
																	</td>
																</tr>
															);
														});
													});
												});
											});
										});
									}
								);
							});
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TierResults;

/*<tr className="results-table-body-row">
												<td className="results-table-body-trait">
													<div className={"results-table-body-trait-slot " + tierLookup[trait1][]}>
														<div className="results-table-body-trait-item"></div>
													</div>
												</td>
											</tr>; */
