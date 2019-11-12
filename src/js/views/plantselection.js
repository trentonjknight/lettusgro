import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function Selection(props) {
	const { store } = useContext(Context);
	let plant = store.plants[props.match.params.id].common_name;
	return (
		<>
			<div className="mx-auto mt-3">
				<div className="mt-1 mx-auto">
					<h1>You have chosen {plant}!</h1>
					<h2 className="text-center">Choose type:</h2>
					<div className="mx-auto">
						<Link to={"/details/" + props.match.params.id} className="btn btn-success text-light m-1">
							Microgreen
						</Link>
						<Link to="/details" className="btn btn-success text-light m-1">
							Mature Plant
						</Link>
					</div>
				</div>
			</div>
			<div className="text-align-left m-2">
				<ol>
					<b>Grow instructions:</b>
					<li>Boil coconut fiber pad(s) in clean tap water 10 mins on high.</li>
					<li>Soak pads past boil for 24 hours.</li>
					<li>pH water to 5.5-6 pH using 2 teaspoons of lemon juice per gallon</li>
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
		</>
	);
}

Selection.propTypes = {
	match: PropTypes.object
};
export default Selection;
