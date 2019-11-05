import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className=" navbar fixed-top navbar-light bg-success mb-3">
			<div>
				<Link to="/">
					<span className="navbar-brand h1 text-light">L E T T U S</span>
				</Link>
				<Link to="/plants">
					<button className=" btn btn-light text-success m-1">Browse Plants</button>
				</Link>
				<Link to="/about">
					<button className=" btn btn-light text-success m-1">Our Mission</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/login">
					<button className=" btn btn-dark text-light">Login</button>
				</Link>
			</div>
			<div className="m-1">
				<Link to="/register">
					<button className=" btn btn-dark text-light">Register</button>
				</Link>
			</div>
		</nav>
	);
};
