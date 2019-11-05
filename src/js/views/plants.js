import React from "react";
import { Link } from "react-router-dom";
import cilantro from "../../img/cilantro.jpg";
import carrot from "../../img/carrot.jpg";
import arugula from "../../img/arugula.jpg";
import parsley from "../../img/parsley.jpg";
import basil from "../../img/basil.jpg";
import broccoli from "../../img/broccoli.jpg";

export const Plants = () => {
	return (
		<>
			<hr />
			<h1 className="mx-auto mt-5">What would you like to grow?</h1>

			<div className="card-deck m-3 text-center">
				<div className="card border-success">
					<Link to="/cilantro">
						<img src={cilantro} className="card-img-top" alt="..." />
						<div className="card-body">
							<h3 className="card-title">Cilantro</h3>
						</div>
					</Link>
				</div>
				<div className="card border-success">
					<img src={carrot} className="card-img-top" alt="..." />
					<div className="card-body">
						<h3 className="card-title">Carrots</h3>
					</div>
				</div>
				<div className="card border-success">
					<img src={arugula} className="card-img-top" alt="..." />
					<div className="card-body">
						<h3 className="card-title">Arugula</h3>
					</div>
				</div>
			</div>
			<div className="card-deck m-3 text-center">
				<div className="card border-success">
					<img src={parsley} className="card-img-top" alt="..." />
					<div className="card-body">
						<h3 className="card-title">Parsley</h3>
					</div>
				</div>
				<div className="card border-success">
					<img src={basil} className="card-img-top" alt="..." />
					<div className="card-body">
						<h3 className="card-title">Basil</h3>
					</div>
				</div>
				<div className="card border-success">
					<img src={broccoli} className="card-img-top" alt="..." />
					<div className="card-body">
						<h3 className="card-title">Broccoli</h3>
					</div>
				</div>
			</div>
			<div className="mx-auto mb-2">
				<Link to="/">
					<button className="btn btn-success text-light">Back home</button>
				</Link>
			</div>
		</>
	);
};
