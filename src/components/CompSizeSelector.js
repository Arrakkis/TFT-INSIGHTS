import React from "react";
import "../css/App.css";

class CompSizeSelector extends React.Component {
	render() {
		let currentClass = "results-table-comp-size";

		if (this.props.active) {
			currentClass = "results-table-comp-size active";
		}

		return (
			<div
				className={currentClass}
				onClick={() => this.props.handleCompSizeChange(this.props.size)}
			>
				{this.props.size}
			</div>
		);
	}
}

export default CompSizeSelector;
