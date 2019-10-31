import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
	return (
		<>
			<div className="mx-auto mt-5 pt-5">
				<div className="card border-success p-3">
					<div className="form-group">
						<h1 className="text-center">Register</h1>
						<label>Username/Email</label>
						<input type="text" placeholder="Enter a username or email" className="form-control" />
						<small id="emailHelp" className="form-text text-muted">
							We will never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" placeholder="Enter password" className="form-control" />
						<small id="pwHelp" className="form-text text-muted">
							Please choose a strong password to protect your information.
						</small>
					</div>
				</div>
				<div className="mx-auto m-1">
					<Link to="/">
						<button className="btn btn-success">Back home</button>
					</Link>
				</div>
			</div>
		</>
	);
};
