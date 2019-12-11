import React from "react";
import "../css/App.css";
import TimeForm from "./TimeForm";
import RankForm from "./RankForm";
import TraitForm from "./TraitForm";

class SelectionTable extends React.Component {
	render() {
		return (
			<table className="selection-table">
				<thead className="selection-table-header">
					<tr className="selection-table-header-row">
						<th className="selection-table-header-head">T R A I T S</th>
						<th className="selection-table-header-head" id="time-header">
							T I M E
						</th>
						<th className="selection-table-header-head">R A N K</th>
					</tr>
				</thead>
				<tbody className="selection-table-body">
					<tr className="selection-table-body-row">
						<td className="selection-table-body-cell">
							<TraitForm
								handleTraitChange={this.props.handleTraitChange}
								handleTraitClear={this.props.handleTraitClear}
								handleTierChange={this.props.handleTierChange}
								trait={this.props.selectedTraits.slot1.trait}
								tier={this.props.selectedTraits.slot1.tier}
								active={this.props.selectedTraits.slot1.active}
								slot="slot1"
							/>
							<TraitForm
								handleTraitChange={this.props.handleTraitChange}
								handleTraitClear={this.props.handleTraitClear}
								handleTierChange={this.props.handleTierChange}
								trait={this.props.selectedTraits.slot2.trait}
								tier={this.props.selectedTraits.slot2.tier}
								active={this.props.selectedTraits.slot2.active}
								slot="slot2"
							/>
							<TraitForm
								handleTraitChange={this.props.handleTraitChange}
								handleTraitClear={this.props.handleTraitClear}
								handleTierChange={this.props.handleTierChange}
								trait={this.props.selectedTraits.slot3.trait}
								tier={this.props.selectedTraits.slot3.tier}
								active={this.props.selectedTraits.slot3.active}
								slot="slot3"
							/>
						</td>
						<td className="selection-table-body-cell-time">
							<TimeForm
								handleTimeChange={this.props.handleTimeChange}
								selectedTime={this.props.selectedTime}
							/>
						</td>
						<td className="selection-table-body-cell-rank">
							<RankForm
								handleRankChange={this.props.handleRankChange}
								selectedRank={this.props.selectedRank}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default SelectionTable;
