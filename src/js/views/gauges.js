import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Gauges = props => {
	return (
		<>
			{props.color === "blue" ? (
				<figure>
					<div className="gauge ">
						<div className="meter" />
					</div>
					<figcaption className="text-light text-center"> pH Level</figcaption>
				</figure>
			) : props.color === "red" ? (
				<figure>
					<div className="gauge overload">
						<div className="meter" />
					</div>
					<figcaption className="text-light text-center">Temperature Range</figcaption>
				</figure>
			) : props.color === "prog" ? (
				<figure>
					<div className="gauge percentage">
						<div className="meter" />
						<div className="percentage-container">
							<table className="table table-dark text-light mt-5">
								<thead>
									<tr>
										<th scope="col">Day</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row" className="percentage-indicator text-success">
											0%
										</th>
										<th scope="row" className="percentage-indicator text-success">
											5%
										</th>
										<th scope="row">3</th>
										<th scope="row">4</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<figcaption className="text-light text-center">Crop Progress</figcaption>
				</figure>
			) : (
				<figure>
					<div className="gauge percentage">
						<div className="meter" />
						<div className="percentage-container">
							<table className="table table-dark text-light mt-5">
								<thead>
									<tr>
										<th scope="col">Day</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row" className="percentage-indicator text-success">
											0%
										</th>
										<th scope="row" className="percentage-indicator text-success">
											5%
										</th>
										<th scope="row">3</th>
										<th scope="row">4</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<figcaption className="text-light text-center">Humidity Reading</figcaption>
				</figure>
			)}
		</>
	);
};
export default Gauges;
