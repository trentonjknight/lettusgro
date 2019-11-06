import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserContext } from "../views/UserContext";

import "../../styles/demo.scss";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<div className="mx-auto pt-5 mt-5">
				<div className="card border-success p-3 ">
					<div className="form-group mt-6">
						<h1 className="text-center">Login</h1>
						<label>Email</label>
						<input
							type="text"
							placeholder="Enter a your email"
							className="form-control"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<small id="emailHelp" className="form-text text-muted">
							We will never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							placeholder="Enter your password"
							className="form-control"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button
						className="btn btn-success"
						onClick={() =>
							actions.login({
								email: email,
								password: password
							})
						}>
						Login
					</button>
				</div>
			</div>
			<div className="mx-auto m-4">
				<Link to="/">
					<button className="btn btn-success">Back home</button>
				</Link>
			</div>
		</>
	);
};
