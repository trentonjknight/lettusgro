import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-light">LETTUS</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className=" btn btn-large btn-primary">Login</button>
				</Link>
			</div>
		</nav>
	);
};
