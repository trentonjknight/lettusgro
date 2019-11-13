import React, { useContext } from "react";
//import Gauges from "./gauges";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Cropmonitor = props => {
	const { store, actions } = useContext(Context);
	let plant = store.plants[props.match.params.index].common_name;
	return (
		<>
			<div className="mt-3">
				<table className="table table-dark text-light text-center mt-5">
					<thead>
						<tr>
							<th scope="col">Crop</th>
							<th scope="col">Progress</th>
							<th scope="col">Temperature</th>
							<th scope="col">pH Level</th>
							<th scope="col">Humidity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">{plant}</th>
							{/* OLD GAUGES!!!
                            <td>
								<Gauges color="prog" />
							</td>
							<td>
								<Gauges color="red" />
							</td>
							<td>
								<Gauges color="blue" />
							</td>
							<td>
								<Gauges />
							</td> */}
						</tr>
					</tbody>
				</table>
			</div>
			<div className=" text-align-left m-2">
				<ol>
					<h2> Hydroponic Crop Instructions:</h2>
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
