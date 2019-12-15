import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import logo from "../css/Images/logo2.png";

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
			</span>
		);
	}
}

export default Home;
