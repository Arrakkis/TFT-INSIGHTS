import React from "react";
import "../css/App.css";
var Chart = require("chart.js");

class GraphBox extends React.Component {
	graphRef = React.createRef();

	componentDidMount() {
		let chart1 = new Chart(this.graphRef.current.getContext("2d"), {
			type: "line",
			data: {
				labels: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December"
				],
				datasets: [
					{
						label: "Rank",
						borderColor: "#c7aa6f",
						data: [2, 10, 20, 22, 46, 60, 65, 80, 81, 90, 95, 99]
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: "Better"
							}
						}
					],
					xAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: "Date"
							}
						}
					]
				}
			}
		});
		console.log(this.graphRef.current.getContext("2d"));
	}

	render() {
		return (
			<div className="chart-container">
				<canvas id="chart1" ref={this.graphRef}></canvas>
			</div>
		);
	}
}

export default GraphBox;
