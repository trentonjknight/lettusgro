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
			<div className="m-2">
				<p>
					Microgreens are the perfect introduction to home gardening as a hobby. It is cheap and easy to setup
					a healthy, hydroponic crop in your home. On top of that, time to harvest is usually under a month so
					you can enjoy the fruit of your labors with your home cooked meals in no time!{" "}
				</p>
			</div>

			<div className="text-align-left m-2">
				<ul>
					<b>Required Materials:</b>
					<li>
						For a scalable, mobile, indoor operation, a 14in x 36in x 54in wire rack will house trays and
						lights
					</li>
					<li>16in x 11in x 13in plastic trays with matching lid for the germination period</li>
					<li>13,000 Lumen 15in LED light strip</li>
					<li>Pre-cut coconut fiber pads or roll (cut to size) </li>
					<li>Zip ties to secure lighting strip to upper rack section</li>
					<li>Heating pad to assist germination and manipulate temperature.</li>
					<li>Ventilation fans (any shape or size)</li>
					<li>Between 1lb-10lbs of seeds depending entirely on the desired operation size</li>
					<li>Spray bottle</li>
					<li>3% hydrogen peroxide</li>
					<li>Pure Lemon juice to balance pH</li>
					<li>Hydroponic grow tray (has perforated holes for roots)</li>
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
					<b>Grow Instructions:</b>
					<li>Boil coconut fiber pads 10 mins on high.(clean tap water)</li>
					<li>Soak pads past boil for 24 hours.(clean tap water) </li>
					<li>pH water to 5.5-6 pH using lemon juice (2 teaspoons per gallon)</li>
					<li>Place wet pads on a grow tray</li>
					<li>Seed each pad with 25-50ml of seed</li>
					<li>Ensure no seeds are clumped or stacked as this may cause them to rot and die</li>
					<li>
						Place seeded pads on grow tray with enough water to soak pads but not wash away the seeds from
						their place.
					</li>
					<li>Place pads on hydroponic grow rack inside grow tray.</li>
					<li>Spray seeds with 3% hydrogen peroxide.</li>
					<li>Spray seeds with water for 30 seconds until well soaked.</li>
					<li>Put germination lid on tray</li>
					<li>
						Place covered tray in a warm, dark place for 4 days, watering once each day with spray bottle
					</li>
					<li>After 4 days, check if micro greens have grown to a height of approx 1 inch</li>
					<li>
						Place trays in direct light until harvest, watering once a day, keeping water level at .25
						inches from hydroponic tray
					</li>
				</ol>
			</div>
		</>
	);
}
export default Cilantro;
