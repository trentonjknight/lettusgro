import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Register = props => {
	const { actions } = useContext(Context);

	const inputFname = useRef(null);
	const inputLname = useRef(null);
	const inputEmail = useRef(null);
	const inputPhone = useRef(null);
	const inputPassword = useRef(null);

	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const validate = () => {
		if (!fname) inputFname.current.style.border = "1px solid red";

		if (!lname) inputLname.current.style.border = "1px solid red";

		if (!phone) inputPhone.current.style.border = "1px solid red";

		if (!email) inputEmail.current.style.border = "1px solid red";

		if (!password) inputPassword.current.style.border = "1px solid red";

		return fname && lname && phone && email && password;
	};

	return (
		<>
			<div className="mx-auto mt-5 pt-5">
				<div className="card ogregreen border-success p-3">
					<h1 className="text-center">Register</h1>
					<p>
						{" "}
						Once registered, you will be able to create, archive,
						<br /> and monitor your specific grow operations.
					</p>
					<div className="form-group">
						<label>First Name</label>
						<input
							type="text"
							placeholder="Enter your first name"
							className="form-control"
							ref={inputFname}
							value={fname}
							onChange={e => setFname(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input
							type="text"
							placeholder="Enter your last name"
							className="form-control"
							ref={inputLname}
							value={lname}
							onChange={e => setLname(e.target.value)}
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
								if (validate())
									actions.register(
										{
											fname: fname.trim(),
											lname: lname.trim(),
											email: email.trim(),
											phone: phone.trim(),
											password: password
										},
										props
									);
							}}>
							REGISTER
						</button>
					</div>
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
export default Register;
