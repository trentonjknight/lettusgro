import React, { useState } from "react";

import { Chart } from "react-google-charts";
export class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: 0,
			ph: 0,
			humidity: 0,
			intervalID: null
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				temperature: this.state.temperature + 30,
				ph: this.state.ph + 30,
				humidity: this.state.humidity + 25
			});
		}, 1000);
	}
	render() {
		const radialOptions = {
			pointer: {
				value: this.state.value
			}
		};

		return (
			<Chart
				width={400}
				height={120}
				chartType="Gauge"
				loader={<div>Loading Chart</div>}
				data={[
					["Label", "Value"],
					["Temperature", this.state.temperature],
					["PH", this.state.ph],
					["Humidity", this.state.humidity]
				]}
				options={{
					redFrom: 90,
					redTo: 100,
					yellowFrom: 75,
					yellowTo: 90,
					minorTicks: 5
				}}
				rootProps={{ "data-testid": "1" }}
			/>
		);
	}
}
