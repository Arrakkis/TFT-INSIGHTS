import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import logo from "../css/Images/logo2.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
	nameRef = React.createRef();
	regionRef = React.createRef();

	searchSummoner = event => {
		event.preventDefault();
		this.props.history.push(
			`/profile/${this.regionRef.current.value}/${this.nameRef.current.value}`
		);
	};

	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={1} />
				<div className="background1"></div>
				<img
					alt="TFT.INSIGHTS logo"
					src={logo}
					className="tft-insights-logo-1"
				/>
				<form className="summoner-search-form" onSubmit={this.searchSummoner}>
					<input
						type="text"
						className="summoner-search-box"
						placeholder="Summoner Name"
						ref={this.nameRef}
					/>
					<select className="summoner-search-region" ref={this.regionRef}>
						<option value="NA">NA</option>
						<option value="EU">EU</option>
						<option value="KR">KR</option>
					</select>
					<button type="submit" className="summoner-search-submit">
						&raquo;
					</button>
				</form>
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

export default Home;
