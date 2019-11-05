import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserContext } from "../views/UserContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//const { setAuth } = useContext(UserContext);

	const login = () => {
		let userLoginData = JSON.stringify({
			email: email,
			password: password
		});
		fetch("http://0.0.0.0:3000/login", {
			method: "POST",
			body: userLoginData,
			cors: "no-cors",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				let token = response.token;
				let email = response.email;
				let fullname = response.fullname;
				if (!token && !email && !fullname) {
					alert("Invalid Input, Please Try Again");
				} else {
					alert("LOGIN SUCCESSFUL");
					localStorage.setItem("token", token);
					localStorage.setItem("email", email);
					localStorage.setItem("firstname", firstname);
					localStorage.setItem("lastname", lastname);

					history.push("/");
				}
			})
			.catch(error => {
				alert("Something Went Wrong, Try again");
				console.log("Error:", error);
			});
	};

	return (
		<>
			<div className="mx-auto pt-1 mt-4">
				<div className="card border-success p-3 ">
					<div className="form-group mt-6">
						<h1 className="text-center">Login</h1>
						<label>Email</label>
						<input
							type="text"
							placeholder="Enter a username or email"
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
					<button className="btn btn-success" onClick={login()}>
						Login
					</button>
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
