import React from "react";
import "../css/App.css";

class RankForm extends React.Component {
	render() {
		return (
			<form className="selection-table-body-selections">
				<div className="selection-button-head">
					<label className="selection-button-label">
						<input
							name="All"
							type="radio"
							className="selection-button"
							checked={this.props.selectedRank === "All"}
							onChange={this.props.handleRankChange}
						></input>
						<div className="selection-all-image rank-div"></div>
					</label>
				</div>
				<div className="selection-button-container">
					<label className="selection-button-label rank-div">
						<input
							name="Challenger"
							type="radio"
							className="selection-button"
							checked={this.props.selectedRank === "Challenger"}
							onChange={this.props.handleRankChange}
						></input>
						<div className="selection-challenger-image rank-div"></div>
					</label>
				</div>
				<div className="selection-button-container">
					<label className="selection-button-label">
						<input
							name="GrandMaster"
							type="radio"
							className="selection-button"
							checked={this.props.selectedRank === "GrandMaster"}
							onChange={this.props.handleRankChange}
						></input>
						<div className="selection-grandmaster-image rank-div"></div>
					</label>
				</div>
				<div className="selection-button-container">
					<label className="selection-button-label">
						<input
							name="Master"
							type="radio"
							className="selection-button"
							checked={this.props.selectedRank === "Master"}
							onChange={this.props.handleRankChange}
						></input>
						<div className="selection-master-image"></div>
					</label>
				</div>
			</form>
		);
	}
}

export default RankForm;
