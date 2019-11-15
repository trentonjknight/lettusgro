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
import basilfarm from "../../img/raspberryfarm.jpg";
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
				{/* <p> Once registered, you will be able to create, archive, and monitor specific grow operations.</p> */}
				<br />
				<br />
			</div>
			{/* fill-- quote card section */}
			<div className="card bg-light ogregreen">
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<br />
						<br />
						<p className="arima">
							Because microgreens are harvested soon after germination, all the nutrient content remain
							concentrated. What
							{"'"}s more is that they are a great source of beneficial plant compounds containing higher
							vitamin, mineral and antioxidant levels than the same quantity of mature greens.
						</p>
						<footer className="blockquote-footer">
							Editor at <cite title="Source Title">Mother Nature Network</cite>
						</footer>
						<br />
						<br />
						<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										src="https://res.cloudinary.com/devryan/image/upload/v1573673432/projects/4geeks/matcha_edited_px070d.jpg"
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://res.cloudinary.com/devryan/image/upload/v1573661441/projects/4geeks/basil-leaves-and-avocado-on-sliced-bread-on-white-ceramic-1351238_yl7bq9.jpg"
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://res.cloudinary.com/devryan/image/upload/v1573661441/projects/4geeks/cook-cooking-cuisine-delicious-357737_yfthlf.jpg"
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://res.cloudinary.com/devryan/image/upload/v1573661441/projects/4geeks/green-leaves-in-clear-glass-cup-1638278_bf2kjo.jpg"
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://res.cloudinary.com/devryan/image/upload/v1573661441/projects/4geeks/photo-of-green-broccoli-white-cheese-and-green-cabbage-on-772508_cgeonn.jpg"
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://res.cloudinary.com/devryan/image/upload/v1573661442/projects/4geeks/closeup-photo-of-mint-461246_ppmiql.jpg"
										className="d-block w-100"
										alt="..."
									/>
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselExampleControls"
								role="button"
								data-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true" />
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselExampleControls"
								role="button"
								data-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true" />
								<span className="sr-only">Next</span>
							</a>
						</div>
					</blockquote>
				</div>
			</div>
			{/* "Plants Section" */}
			<div className="bg-plants">
				<br />
				<br />
				<br />
				<ScrollableAnchor id={"plants"}>
					<div className="pb-4" />
				</ScrollableAnchor>
				<h1 className="mx-auto mt-5 mb-4 pgtitles text-center">What would you like to grow?</h1>
				<div className="container">
					<div className="row">
						{store.plants.map((item, index) => {
							return (
								<div key={index} className="col-sm-12 col-md-4 mb-4 text-center">
									<div className="card bg-light border-dark" style={{ border: "3px solid grey" }}>
										<Link to={"/details/" + index}>
											<div>
												<img
													src={item.url}
													width="100%"
													height="100%"
													alt="..."
													style={{ maxHeight: "230px" }}
												/>
											</div>
											<div
												className="card-footer card-text text-dark"
												style={{ fontSize: "23px" }}>
												{item.common_name}
											</div>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* "mission Section" */}
			<ScrollableAnchor id={"about"}>
				<div className="pb-2" />
			</ScrollableAnchor>
			<div className="about, bg-about text-center pt-5">
				<h1 className="pgtitles">Our Mission</h1>
				<div className="bgcoloropacity1">
					{/* first card with trent and ryan info */}
					<div className="card bg-about picSize">
						<img
							src="https://res.cloudinary.com/devryan/image/upload/v1573831148/projects/4geeks/aboutplantpng_kmhhqo.png"
							className="card-img"
							alt="..."
						/>
						<div className="card-img-overlay">
							<p className="aboutbannerFONT bigFont">Meet Trent & Ryan</p>
							<h3 className="aboutbannerFONT Wht">our hearty founders</h3>
						</div>
					</div>
					<p className="fontSize comforta aboutFontComforta">
						<br />
						<br />
						<br />
						Trenton and Ryan are both originally from South Florida, they met at 4Geeks programming academy
						in downtown, Miami. each had a purpose to refine their knowledge in computer software and
						programming. Along the way, several momentous occasions later, they soon discovered they had
						shared interests in clean eating, and explored the opportunity to develop a startup right here
						in our backyard. Tying together all that they have accrued along the way, incorporating modern
						technology with early nomadic principality. Their message is to inspire healthier communities by
						engaging people to harvest and benefit from microgreens, herbs, vegetables, and fruits! At
						Lettus our mission is positioned to align with your values from large businesses to small
						recreationalist alike --
					</p>
					<img
						src="https://res.cloudinary.com/devryan/image/upload/v1573831460/projects/4geeks/soplslettusgrow_wvyo5v.png"
						className="card-img imageSize"
						alt="..."
					/>
					{/* second card */}
					<div className="ogregreen card mb-3">
						<div className="row no-gutters">
							<div className="col-md-4">
								<img src={basilfarm} className="card-img" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title" />
									<p className="CT, card-text">
										Plan, sow, grow, harvest, market, and succeed! The Lettus encyclopedia easily
										allows for careful growing, and propogating of your own vegetation without any
										of the dissatisfaction that often follows traditional gardening. Here at Lettus
										Gro farm, we
										{"'"}
										ve combined our expert analysis, backed by scientific data, into one small
										web-based resource, at your fingertips! but wait, where the real magic happens
										is; when a little tech is introduced in the form of, Raspberry Pi.
									</p>
									<p className="comforta">
										<small className="text-muted">
											Raspberry Pi is a low-cost credit card sized computer which allows for
											controlling electronic components, learn programming skills, build hardware
											projects, do home automation, and even use them in industrial applications.
										</small>
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* third card */}
					<div className="ogregreen card bg-dark text-white text-center">
						<img src={purrpcrop} className="card-img" alt="..." />
						<div className="card-img-overlay">
							<div className="bgcoloropacity2">
								<p className="comforta textsizing ">
									Lettus is a SMART garden monitoring system, complete with sensors for soil moisture,
									sunlight, air quality, temperature, and humidity. The Raspberry can send out alerts
									directly to the user, check to see if the ph is balanced in cases of hydrophonics
									cultivation, and much much more!
								</p>
							</div>
							{/* <p className="card-text">Last updated 3 mins ago</p> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
