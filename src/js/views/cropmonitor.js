import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { LinearGauge, RadialGauge } from "react-canvas-gauges";
import { ProgressBar, Step } from "react-step-progress-bar";

export const Cropmonitor = props => {
	const { store, actions } = useContext(Context);
	let plant = store.plants[props.match.params.index].common_name;
	let tempmin = store.plants[props.match.params.index].temperature_minimum;
	let tempmax = store.plants[props.match.params.index].temperature_maximum;
	let phmin = store.plants[props.match.params.index].ph_minimum;
	let phmax = store.plants[props.match.params.index].ph_maximum;
	let humid = store.plants[props.match.params.index].humidity;
	const [count, setCount] = useState(0);
	const [runProgressBar, setRunProgressBar] = useState(false);

	useEffect(
		() => {
			if (runProgressBar) {
				setTimeout(() => setCount(count + 25), 6000);
				if (count === 25) actions.sendMsg("Lettus notification: water your plants!");
				if (count === 50) actions.sendMsg("Lettus notification: Turn on the lights!");
			}
			if (count === 75) setRunProgressBar(false);
			if (count === 100) actions.sendMsg("Lettus notification: harvest time!");
		},
		[count, runProgressBar]
	);

	return (
		<>
			<div className="mt-5">
				<div className="text-center bg-dark text-light mt-4">
					<h1>Crop Monitor ({plant})</h1>
				</div>
				<table className="table table-dark text-light text-center">
					<thead>
						<tr>
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
							<td>
								<LinearGauge
									units="°F"
									value={45}
									minValue={0}
									maxValue={100}
									majorTicks={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
									minorTicks={1}
									width="200"
									height="400"
									colorNumbers={"red"}
									colorUnits={"red"}
									highlights={[
										{ from: 0, to: 50, color: "rgba(0, 191, 255,.35)" },
										{ from: 50, to: 100, color: "rgba(255,0,0,.35)" }
									]}
								/>
							</td>
							<td>
								<RadialGauge
									units="pH"
									title="pH Value"
									value={0}
									colorUnits={"red"}
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
										{ from: 0, to: 1, color: "rgba(255,0,0,.35)" },
										{ from: 1, to: 3, color: "rgba(255,140,0,.35)" },
										{ from: 3, to: 4, color: "rgba(255,255,0,.35)" },
										{ from: 4, to: 5, color: "rgba(0,255,0,.35)" },
										{ from: 5, to: 6, color: "rgba(50,205,50,.35)" },
										{ from: 6, to: 7, color: "rgba(0, 128, 0,.35)" },
										{ from: 7, to: 8, color: "rgba(34, 139, 34,.35)" },
										{ from: 8, to: 9, color: "rgba(127,255,212,.35)" },
										{ from: 9, to: 10, color: "rgba(0, 191, 255,.35)" },
										{ from: 10, to: 11, color: "rgba(30, 144, 255,.35)" },
										{ from: 11, to: 12, color: "rgba(0, 0, 139,.35)" },
										{ from: 12, to: 13, color: "rgba(138, 43, 226,.35)" },
										{ from: 13, to: 14, color: "rgba(128, 0, 128,.35)" }
									]}
								/>
							</td>
							<td>
								<RadialGauge
									units="%"
									title="% Humidity"
									colorNumbers={"red"}
									colorUnits={"red"}
									value={70}
									minValue={0}
									maxValue={100}
									majorTicks={["0", "25", "50", "75", "100"]}
									minorTicks={1}
									height={300}
									colorTitle={"red"}
									width={300}
									animationRule={"bounce"}
									animationDuration={100}
									animatedValue={true}
								/>
							</td>
						</tr>
						<tr>
							<td>
								{" "}
								<h4>
									Ideal: {tempmin} - {tempmax}
								</h4>
							</td>
							<td>
								{" "}
								<h4>
									Ideal: {phmin} - {phmax}
								</h4>
							</td>
							<td>
								{" "}
								<h4>Ideal: {humid}</h4>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="text-center">
				<h1>Crop Progress</h1>
			</div>
			<div className="m-3 p-5 card ogregreen">
				<ProgressBar percent={count} filledBackground="linear-gradient(to right, #f2e6ff, #8000ff)">
					{store.progressbar.map((item, index) => {
						return (
							<Step key={index} transition="scale">
								{({ accomplished }) => (
									<img
										style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
										width={item.width}
										src={item.image}
									/>
								)}
							</Step>
						);
					})}
				</ProgressBar>{" "}
			</div>
			<div className="card ogregreen text-align-left p-2 m-2">
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
				<button
					onClick={() => {
						if (count === 0) setRunProgressBar(true);
						else if (count === 100) {
							setCount(0);
							setRunProgressBar(true);
						}
					}}
					className="btn btn-success text-light">
					Begin Countdown to Harvest
				</button>
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
