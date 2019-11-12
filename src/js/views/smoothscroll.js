import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ScrollableAnchor from "react-scrollable-anchor";
import sprout from "../../img/Sprout2.png";
import vine from "../../img/vine.png";
import bgstraw from "../../img/strawhatresized.png";
import "../../styles/home.scss";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import basilfarm from "../../img/basilfarm.jpg";
import purrpcrop from "../../img/purplehaze.jpg";

export const Smoothscroll = () => {
	const { store } = useContext(Context);

	return (
		<>
			<div id="link1" className="text-center pt-5 mt-3 bgstraw">
				<h1>L E T T U S</h1>
				<div className="tight">
					<p className="comforta">
						A plant growth management application employing the Raspberry Pi and sensor technology to make
						horticulture easy.
					</p>
				</div>

				{/* <h3>Register for free!</h3>
		        <h4> Let us grow with you :)</h4> */}
				<Link to="/register">
					<button className="btn btn-success btn-lg mb-3">Donate</button>
				</Link>
				{/* <ProgressBar percent={75} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" /> */}
				<p>
					<img src={sprout} style={{ height: "300px", width: "300px" }} />
				</p>
				<p> Once registered, you will be able to create, archive, and monitor specific grow operations.</p>
			</div>
			<hr />
			{/* fill-- quote card section */}
			<div className="card bg-light">
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p>
							<br />
							<br />
							Because microgreens are harvested right after germination, all the nutrients they need to
							grow remain. When harvested at the right time they are very concentrated with nutrients, the
							flavor and texture is also great.
						</p>
						<footer className="blockquote-footer">
							Someone famous in <cite title="Source Title">Mother Nature Network</cite>
						</footer>
						<br />
						<br />
					</blockquote>
				</div>
			</div>
			{/* "Plants Section" */}
			<ScrollableAnchor id={"plants"}>
				<div className="pb-4" />
			</ScrollableAnchor>
			<h1 className="mx-auto mt-5 mb-4 pgtitles">What would you like to grow?</h1>
			<div className="container">
				<div className="row">
					{store.plants.map((item, index) => {
						return (
							<div key={index} className="col-4 mb-4 text-center">
								<div className="card bg-light border-dark" style={{ border: "3px solid grey" }}>
									<Link to={"/selection/" + index}>
										<div>
											<img src={item.url} width="100%" height="100%" alt="..." />
										</div>
										<div className="card-footer card-text text-dark" style={{ fontSize: "23px" }}>
											{item.common_name}
										</div>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="mx-auto mb-2">
				<Link to="/">
					<button className="btn btn-success text-light">Back home</button>
				</Link>
			</div>
			{/* "mission Section" */}
			<ScrollableAnchor id={"about"}>
				<div className="pb-2" />
			</ScrollableAnchor>
			<div className="about, bg-about text-center pt-5 mt-5">
				<h1 className="pgtitles">Our Mission</h1>
				<p className="fontSize">
					To inspire healthier communities by engaging people to harvest and benefit from microgreens, herbs,
					vegetables, and fruits!
				</p>

				<div className="ogregreen card mb-3">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src={basilfarm} className="card-img" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title" />
								<p className="CT, card-text">
									Plan, sow, grow, harvest, market, and succeed! The Lettus encyclopedia easily allows
									for careful growing, and propogating of your own vegetation without any of the
									dissatisfaction that often follows traditional gardening. Here at Lettus Gro farm,
									we
									{"'"}
									ve combined our expert analysis, backed by scientific data, into one small web-based
									resource, at your fingertips! but wait, where the real magic happens is; when
									automated regulation mode is introduced with a little tech, in the form of a
									Raspberry Pi. Lettus is a SMART garden monitoring system, complete with sensors for
									soil moisture, sunlight, air quality, temperature, and humidity. The Raspberry can
									send out alerts directly to the user, check to see if the ph is balanced in cases of
									hydrophonics cultivation, and much much more! Notice that our mission is positioned
									to align with your values from large businesses to small recreationalist alike -- so
									please Lettus grow with you :)
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="ogregreen card bg-dark text-white">
					<img src={purrpcrop} className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">Last updated 3 mins ago</p>
					</div>
				</div>
			</div>
		</>
	);
};
