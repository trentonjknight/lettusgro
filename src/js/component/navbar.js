import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="m-4">
			<nav className="navbar fixed-top navbar-light bg-success mb-3">
				<div>
					<Link to="/">
						<span className="navbar-brand mb-0 h1 text-light">L E T T U S</span>
					</Link>
					<Link to="/plants">
						<button className=" btn btn-light text-success m-1">Browse Plants</button>
					</Link>
					<button className=" btn btn-light text-success m-1">Our Mission</button>
				</div>
				<div className="ml-auto">
					<Link to="/login">
						<button className=" btn btn-dark text-light">Login</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
