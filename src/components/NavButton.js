import React from "react";
import "../css/App.css";

class NavButton extends React.Component {
	render() {
		let className = "navbutton";
		if (this.props.isActive) {
			className = "navbutton-active";
		} else {
			className = "navbutton";
		}
		return (
			<button
				className={className}
				onClick={() =>
					this.props.handleClick(this.props.index, this.props.destination)
				}
			>
				{this.props.content}
			</button>
		);
	}
}

export default NavButton;
