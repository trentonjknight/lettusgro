import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useToast, Button } from "@chakra-ui/core";

const Register = () => {
	const inputFullname = useRef(null);
	const inputEmail = useRef(null);
	const inputPhone = useRef(null);
	const inputPassword = useRef(null);

	const [fullname, setFullname] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const toast = useToast();

	const registerFormHandler = () => {
		if (!fullname) {
			inputFullname.current.style.border = "1px solid red";
		}
		if (!phone) {
			inputPhone.current.style.border = "1px solid red";
		}
		if (!email) {
			inputEmail.current.style.border = "1px solid red";
		}
		if (!password) {
			inputPassword.current.style.border = "1px solid red";
		} else {
			let userRegisterData = JSON.stringify({
				fullname: fullname,
				phone: phone,
				email: email,
				password: password
			});
			fetch("http://0.0.0.0:3000/register", {
				method: "POST",
				body: userRegisterData,
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(res => {
					alert("REGISTER SUCCESSFUL");
					//console.log(res);
					history.push("/login");
				})
				.catch(error => {
					//console.log("Error:", error);
					alert("error", JSON.stringify(error));
				});
		}
	};

	return (
		<>
			<div className="mx-auto mt-5 pt-5">
				<div className="card border-success p-3">
					<h1 className="text-center">Register</h1>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							placeholder="Enter your full name"
							className="form-control"
							ref={inputFullname}
							value={fullname}
							onChange={e => setFullname(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							placeholder="Enter your email"
							className="form-control"
							ref={inputEmail}
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<small id="emailHelp" className="form-text text-muted">
							We will never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="text"
							placeholder="Enter your phone number"
							className="form-control"
							ref={inputPhone}
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							placeholder="Enter password"
							className="form-control"
							ref={inputPassword}
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<small id="pwHelp" className="form-text text-muted">
							Please choose a strong password to protect your information.
						</small>
					</div>
					<div className="mx-auto m-2">
						<button
							className="btn btn-success"
							onClick={() => {
								registerFormHandler();
							}}>
							REGISTER
						</button>
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
export default Register;
