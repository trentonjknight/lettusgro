import React from "react";
import sprout from "../../img/sprout.png";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-1">
		<h1>L E T T U S</h1>
		<h2>Register for free!</h2>
		<h3> Let us grow with you :)</h3>
		<Link to="/register">
			<button className="btn btn-success mb-3">Register</button>
		</Link>
		<p>
			<img src={sprout} style={{ height: "350px", width: "350px" }} />
		</p>
	</div>
);
