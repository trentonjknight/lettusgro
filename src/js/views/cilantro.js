import React from "react";
import { Link } from "react-router-dom";

function Cilantro() {
	return (
		<>
			<div className="mt-3 mx-auto">
				<h2 className="text-center">Choose type:</h2>
				<button className="btn btn-success text-light m-1">Microgreens</button>
				<button className="btn btn-success text-light m-1">Full-Grown Herb</button>
			</div>
		</>
	);
}
export default Cilantro;
