import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="mx-auto pt-5 mt-5">
				<div className="card border-success p-3 ">
					<div className="form-group mt-6">
						<h1 className="text-center">Login</h1>
						<label>Username/Email</label>
						<input type="text" placeholder="Enter a username or email" className="form-control" />
						<small id="emailHelp" className="form-text text-muted">
							We will never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" placeholder="Enter password" className="form-control" />
					</div>
				</div>
			</div>
			<div className="mx-auto m-1">
				<Link to="/">
					<button className="btn btn-success">Back home</button>
				</Link>
			</div>
		</>
	);
};
