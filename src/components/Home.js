import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import logo from "../css/Images/tftInsightsLogo2.png";
import compResults from "../css/Images/compResults.png";
import graphExample from "../css/Images/graphExample.png";
import rankDist from "../css/Images/rankDist.png";

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
				<div className="page-line-break"></div>
				<div className="home-display">
					<img
						style={{ minWidth: "415px", minHeight: "215px" }}
						src={graphExample}
						alt="graph example"
					/>
					<p>
						Dynamic graphs and displays to decompose and analyze important
						metrics, and stay ahead of the curve.
						<br />
					</p>
				</div>
				<div className="page-line-break"></div>
				<div className="home-display">
					<p>
						Improve your rank and increase your skill with analysis customized
						from your own behaviors and playstyles.
					</p>
					<img src={rankDist} alt="iron rank" />
				</div>
				<div className="page-line-break"></div>
				<div className="home-display">
					<img src={compResults} alt="challenger rank" />
					<p>
						Access complex statistical models and develop new insights into the
						current meta. Adapt, and dominate.
					</p>
				</div>
				<div className="page-line-break"></div>
			</span>
		);
	}
}

export default Home;
