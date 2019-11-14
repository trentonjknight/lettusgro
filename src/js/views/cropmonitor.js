import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { LinearGauge, RadialGauge } from "react-canvas-gauges";
//import Chart from "react-google-charts";
//import { Test } from "./test";

export const Cropmonitor = props => {
	const { store, actions } = useContext(Context);
	let plant = store.plants[props.match.params.index].common_name;

	return (
		<>
			<div className="mt-5">
				<div className="text-center bg-dark text-light mt-4">
					<h1>Crop Monitor</h1>
				</div>
				<table className="table table-dark text-light text-center">
					<thead>
						<tr>
							<th>
								<h4 scope="col">Crop</h4>
							</th>
							<th>
								<h4 scope="col">Temperature</h4>
							</th>
							<th>
								<h4 scope="col">pH Level</h4>
							</th>
							<th>
								<h4 scope="col">Humidity</h4>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">
								<h4 className="mt-5">{plant}</h4>
							</th>
							<td>
								<LinearGauge
									units="°F"
									title="Temperature"
									value={0}
									minValue={0}
									maxValue={100}
									majorTicks={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
									minorTicks={1}
									width="200"
									height="500"
									colorNumbers={"red"}
									colorTitle={"red"}
								/>
							</td>
							<td>
								<RadialGauge
									units="pH"
									title="pH Value"
									value={0}
									minValue={0}
									maxValue={14}
									majorTicks={[
										"0",
										"1",
										"2",
										"3",
										"4",
										"5",
										"6",
										"7",
										"8",
										"9",
										"10",
										"11",
										"12",
										"13",
										"14"
									]}
									minorTicks={5}
									width={300}
									height={300}
									colorNumbers={"red"}
									colorTitle={"red"}
									highlights={[
										{ from: 0, to: 3, color: "rgba(0,255,0,.15)" },
										{ from: 3, to: 7, color: "rgba(255,255,0,.15)" },
										{ from: 7, to: 10, color: "rgba(255,30,0,.25)" },
										{ from: 10, to: 14, color: "rgba(255,0,225,.25)" }
									]}
								/>
							</td>
							<td>
								<RadialGauge
									units="%"
									title="% Humidity"
									colorNumbers={"red"}
									value={0}
									minValue={0}
									maxValue={100}
									majorTicks={["0", "25", "50", "75", "100"]}
									minorTicks={1}
									height="300"
									colorTitle={"red"}
									width="300"
									animationRule={"bounce"}
									animationDuration={"100"}
									animatedValue={"true"}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className=" text-align-left m-2">
				<ol>
					<h2> Hydroponic Crop Instructions:</h2>
					<h4>
						Follow the steps outlined below, then click the begin countdown button when you have completed
						them to start the countdown until harvest, and receive SMS notifications for watering, lighting,
						and time until harvest.
					</h4>
					<li>Boil coconut fiber pad(s) in clean tap water 10 mins on high.</li>
					<li>Soak pads past boil for 24 hours.</li>
					<li>pH water to recommended range using lemon juice if necessary</li>
					<li>Place wet pad(s) on a tray</li>
					<li>
						Seed each pad with 25-50mL of seeds, ensuring no seeds are clumped or stacked as this will cause
						them to rot and die.{" "}
					</li>
					<li>Place seeded pad on tray with enough water to soak pads and keep the seeds in place </li>
					<li>Place seeded pads on Hydroponic grow tray</li>
					<li>Spray seeds with 3% hydrogen peroxide</li>
					<li>Place germination lid on tray and transfer to a warm, dark place for 4 days</li>
					<li>Water once each day with spray bottle for 3 days </li>
					<li>
						Determine end of germination period by checking height of greens to be at approximately 1 inch
					</li>
					<li>After the germination period, place open trays in direct light daily until harvest. </li>
					<li>
						Keep water level .25 inches from the hydroponic tray as a baseline for how much water to keep in
						the main tray
					</li>
				</ol>
			</div>
			<div className="mx-auto">
				<button className="btn btn-success text-light">Begin Countdown to Harvest</button>
			</div>
			<div className="mx-auto m-3">
				<Link to="/plants">
					<button className="btn btn-success">Back to plants</button>
				</Link>
			</div>
		</>
	);
};
Cropmonitor.propTypes = {
	match: PropTypes.object
};
