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
				<div className="navbar-wall"></div>
				<NavButton
					content="H O M E"
					index={1}
					handleClick={this.handleClick}
					isActive={this.state.activeIndex === 1}
					destination="/home"
					history={this.props.history}
				/>
				<div className="navbar-wall"></div>
				<NavButton
					content="A N A L Y T I C S"
					index={2}
					handleClick={this.handleClick}
					isActive={this.state.activeIndex === 2}
					destination="/analytics"
					history={this.props.history}
				/>
				<div className="navbar-wall"></div>
				<NavButton
					content="C H A M P I O N S"
					index={3}
					handleClick={this.handleClick}
					isActive={this.state.activeIndex === 3}
					destination="/champions"
					history={this.props.history}
				/>
				<div className="navbar-wall"></div>
				<NavButton
					content="P R O F I L E"
					index={4}
					handleClick={this.handleClick}
					isActive={this.state.activeIndex === 4}
					destination="/profile"
					history={this.props.history}
				/>
				<div className="navbar-wall"></div>
			</div>
		);
	}
}

export default NavBar;
