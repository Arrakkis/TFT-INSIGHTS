import React from "react";
import "../css/App.css";
import NavButton from "./NavButton";

class NavBar extends React.Component {
	handleClick = (index, destination) => {
		this.setState({ activeIndex: index });
		this.props.history.push(destination);
	};

	state = {
		activeIndex: this.props.activeIndex
	};

	render() {
		return (
			<div className="navbar">
				<NavButton
					content="HOME"
					index={1}
					handleClick={this.handleClick}
					isActive={this.state.activeIndex === 1}
					destination="/home"
					history={this.props.history}
				/>
				<NavButton
					content="ANALYTICS"
					index={2}
					handleClick={this.handleClick}
					isActive={this.state.activeIndex === 2}
					destination="/analytics"
					history={this.props.history}
				/>
				<NavButton
					content="RECENT BUILDS"
					index={3}
					handleClick={this.handleClick}
					isActive={this.state.activeIndex === 3}
					destination="/builds"
					history={this.props.history}
				/>
				<NavButton
					content="PROFILE"
					index={4}
					handleClick={this.handleClick}
					isActive={this.state.activeIndex === 4}
					destination="/profile"
					history={this.props.history}
				/>
			</div>
		);
	}
}

export default NavBar;
