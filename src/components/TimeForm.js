import React from "react";
import "../css/App.css";

class TimeForm extends React.Component {
	render() {
		return (
			<form className="selection-table-body-selections">
				<label className="selection-button-label-time">
					<div className="selection-button-head">
						<input
							name="30days"
							type="radio"
							className="selection-button"
							checked={this.props.selectedTime === "30days"}
							onChange={this.props.handleTimeChange}
						></input>
						<div className="selection-time-button">30 days</div>
					</div>
				</label>
				<label className="selection-button-label-time">
					<div className="selection-button-container">
						<input
							name="7days"
							type="radio"
							className="selection-button"
							checked={this.props.selectedTime === "7days"}
							onChange={this.props.handleTimeChange}
						></input>
						<div className="selection-time-button">7 Days</div>
					</div>
				</label>
				<label className="selection-button-label-time">
					<div className="selection-button-container">
						<input
							name="1day"
							type="radio"
							className="selection-button"
							checked={this.props.selectedTime === "1day"}
							onChange={this.props.handleTimeChange}
						></input>
						<div className="selection-time-button">24 Hours</div>
					</div>
				</label>
			</form>
		);
	}
}

export default TimeForm;
