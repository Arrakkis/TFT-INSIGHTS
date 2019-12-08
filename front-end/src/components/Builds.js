import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

class Builds extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={3} />
				<div className="background1"></div>
				<footer>
					<div className="footer-links">
						<Link to={`/about`}>About INSIGHTS</Link>
					</div>
					<div className="disclaimer">
						© 2019 TFT.INSIGHTS TFT.INSIGHTS isn’t endorsed by Riot Games and
						doesn’t reflect the views or opinions of Riot Games or anyone
						officially involved in producing or managing League of Legends.
						League of Legends and Riot Games are trademarks or registered
						trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
					</div>
				</footer>
			</span>
		);
	}
}

export default Builds;
