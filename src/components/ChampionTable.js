import React from "react";
import "../css/App.css";
import TimeForm from "./TimeForm";
import RankForm from "./RankForm";
import ChampionForm from "./ChampionForm";

class ChampionTable extends React.Component {
	render() {
		return (
			<table className="selection-table">
				<thead className="selection-table-header">
					<tr className="selection-table-header-row">
						<th className="selection-table-header-head">C H A M P I O N</th>
						<th className="selection-table-header-head" id="time-header">
							T I M E
						</th>
						<th className="selection-table-header-head">R A N K</th>
					</tr>
				</thead>
				<tbody className="selection-table-body">
					<tr className="selection-table-body-row">
						<td className="selection-table-body-cell">
							<ChampionForm
								handleTraitChange={this.props.handleTraitChange}
								handleTraitClear={this.props.handleTraitClear}
								trait={this.props.trait}
								active={true}
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

export default ChampionTable;
