import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Cilantro() {
	return (
		<>
			<div className="mx-auto mt-3">
				<div className="mt-5 mx-auto">
					<h2 className="text-center">Choose type:</h2>
					<Link to="/details" className="btn btn-success text-light m-1">
						Microgreen
					</Link>
					<Link to="/details" className="btn btn-success text-light m-1">
						Mature Plant
					</Link>
				</div>
			</div>
			<div className="text-align-left m-2">
				<ul>
					<b>Required Materials:</b>
					<li>
						For a scalable, mobile, indoor operation, a 14in x 36in x 54in wire rack will house trays and
						lights
					</li>
					<li>16in x 11in x 13in plastic trays with matching cover for the germination period</li>
					<li>13,000 Lumen 15in LED light strip</li>
					<li>Pre-cut coconut fiber pads or roll (cut to size) </li>
					<li>Zip ties to secure lighting to rack</li>
					<li>Heating pad</li>
					<li>Ventilation fans</li>
					<li>Between 1lb-10lbs of seeds depending entirely on the desired operation size</li>
					<li>Spray bottle</li>
					<li>3% hydrogen peroxide</li>
					<li>Pure Lemon juice to balance pH</li>
				</ul>
			</div>
			<div className="text-align-left m-2">
				<ul>
					<b>Vital statistics from Trefle.io API:</b>
					<li>
						Days to Maturity:
						{}
					</li>
					<li>
						Precipitation Min {} - Max {}
					</li>
					<li>
						Temperature Min {} - Max {}
					</li>
					<li>
						Humidity Min {} - Max {}
					</li>
					<li>Light Cycle </li>
					<li>
						pH Min {} - Max {}{" "}
					</li>
					<li>Edible {} </li>
					<li>Mature Height {} </li>
				</ul>
			</div>
			<div className="text-align-left m-2">
				<ol>
					Grow instructions:
					<li>Boil coconut fiber pads 10 mins on high.</li>
					<li>Soak pads past boil for 24 hours.</li>
				</ol>
			</div>
		</>
	);
}
export default Cilantro;
