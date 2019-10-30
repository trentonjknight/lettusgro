import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-success mb-3">
			<div>
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-light">L E T T U S</span>
				</Link>
				<Link to="/plants">
					<button className=" btn btn-large btn-primary">Browse Plants</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/login">
					<button className=" btn btn-large btn-primary">Login</button>
				</Link>
			</div>
		</nav>
	);
};
