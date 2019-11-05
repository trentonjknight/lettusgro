import React from "react";
import basilfarm from "../../img/basilfarm.jpg";
import steakgrains from "../../img/steakgrains.jpg";
// import { Link } from "react-router-dom";

export const About = () => {
	return (
		<>
			<div className=" about, text-center pt-5 mt-5">
				<h3 className="pgtitles">OUR MISSION</h3>
				{/* <h5>
					To inspire healthier communities by engaging people to harvest and benefit from multi-purpose
					Microgreens!
				</h5> */}
			</div>

			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={basilfarm} className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">
								To inspire healthier communities by engaging people to harvest and benefit from
								multi-purpose Microgreens!
							</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="card bg-dark text-white">
				<img src={steakgrains} className="card-img" alt="..." />
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
