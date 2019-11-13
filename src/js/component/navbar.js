import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ScrollableAnchor from "react-scrollable-anchor";

export const Navbar = () => {
	const { store } = useContext(Context);
	// render();
	// {
	return (
		<>
			<div style={{ height: "70px" }} />
			<nav className=" navbar navbar-light bg-success mb-3 position-fixed w-100" style={{ zIndex: "10" }}>
				<div className="padded">
					<Link to="/" className="nav-section1 navbar-brand h1 text-light">
						L E T T U S
					</Link>

					<a href="#plants">
						<button className=" btn btn-light text-success m-1">Browse Plants</button>
					</a>
					<a href="#about">
						<button className=" btn btn-light text-success m-1">Our Mission</button>
					</a>
					{/* <Link to="/about">
					<button className=" btn btn-light text-success m-1">Our Mission</button>
				</Link> */}
				</div>
				{store.token ? (
					<h3>{store.user.email}</h3>
				) : (
					<>
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
					</>
				)}
			</nav>
		</>
	);
	// }
};
