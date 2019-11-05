import React from "react";
import { Link } from "react-router-dom";

function Cilantro() {
	return (
		<>
			<div className="mx-auto mt-3">
				<div className="mt-5 mx-auto">
					<h2 className="text-center">Choose type:</h2>
					<button className="btn btn-success text-light m-1">Microgreen</button>
					<button className="btn btn-success text-light m-1">Mature Plant</button>
				</div>
			</div>
			<div className="text-align-left">
				<h5> Required Materials:</h5>
				<p>For a scalable, mobile operation a 14in x 36in x 54in wire rack can house trays and lights.</p>
				<p>16in x 11in x 13in plastic trays for germination.</p>
			</div>
		</>
	);
}
export default Cilantro;
