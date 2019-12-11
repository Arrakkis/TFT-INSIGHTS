import React from "react";
import "../css/App.css";
import { ratioToPercentage } from "../helpers";

class TierResults extends React.Component {
	render() {
		let i = 0;
		let j = 0;
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
						{Object.keys(this.props.results).map(trait => {
							i = i + 1;
							return (
								<tr key={i} className="results-table-body-row">
									{Object.keys(this.props.results[trait]).map(tier => {
										j = j + 5;
										return (
											<React.Fragment key={j + 4}>
												<td key={j} className="results-table-body-trait">
													{trait.toLocaleUpperCase()}
												</td>
												<td
													key={j + 1}
													className="results-table-body-popularity"
												>
													{ratioToPercentage(
														this.props.results[trait][tier].popularity
													)}
												</td>
												<td
													key={j + 2}
													className="results-table-body-champions"
												>
													3 top champions and most common item on each one
												</td>
												<td key={j + 3} className="results-table-body-winrate">
													{ratioToPercentage(
														this.props.results[trait][tier].winrate
													)}
												</td>
											</React.Fragment>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TierResults;
