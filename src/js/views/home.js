import React from "react";
import sprout from "../../img/sprout.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-1">
		<h1>Register for free!</h1>
		<h2> Grow with us :)</h2>
		<p>
			<img src={sprout} style={{ height: "250px", width: "250px" }} />
		</p>
	</div>
);
