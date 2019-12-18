import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";

class Graphs extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={2} />
				<div className="background1"></div>
				<div className="analysis-header-container">
					<a className="analysis-header" href="/analytics">
						C O M P O S I T I O N S
					</a>
					<a className="analysis-header" href="/champions">
						C H A M P I O N S
					</a>
					<a className="analysis-header active" href="/graphs">
						G R A P H S
					</a>
					<a className="analysis-header" href="/appendix">
						A P P E N D I X
					</a>
				</div>
			</span>
		);
	}
}

export default Graphs;
