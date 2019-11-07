import React from "react";
import basilfarm from "../../img/basilfarm.jpg";
import salad from "../../img/salad.jpg";
// import { Link } from "react-router-dom";

export const About = () => {
	return (
		<>
			<div className=" about, text-center pt-5 mt-5">
				<h1 className="pgtitles">Our Mission</h1>
				<p className="fontSize">
					To inspire healthier communities by engaging people to harvest and benefit from microgreens, herbs,
					vegetables, and fruits!
				</p>
			</div>

			<div className="ogregreen card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={basilfarm} className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title" />
							<p className="CT, card-text">
								Plan, sow, grow, harvest, market, and succeed! The Lettus encyclopedia easily allows for
								careful growing, and propogating of your own vegetation without any of the
								dissatisfaction that often follows traditional gardening. Here at Lettus Gro farm, we
								{"'"}
								ve combined our expert analysis, backed by scientific data, into one small web-based
								resource, at your fingertips! but wait, where the real magic happens is; when automated
								regulation mode is introduced with a little tech, in the form of a Raspberry Pi. Lettus
								is a SMART garden monitoring system, complete with sensors for soil moisture, sunlight,
								air quality, temperature, and humidity. The Raspberry can send out alerts directly to
								the user, check to see if the ph is balanced in cases of hydrophonics cultivation, and
								much much more! Notice that our mission is positioned to align with your values from
								large businesses to small recreationalist alike -- so please Lettus grow with you :)
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="ogregreen card bg-dark text-white">
				<img src={salad} className="card-img" alt="..." />
				<div className="card-img-overlay">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
					<p className="card-text">Last updated 3 mins ago</p>
				</div>
			</div>
		</>
	);
};
