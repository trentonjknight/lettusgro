import React from "react";
import { Link } from "react-router-dom";
import cilantro from "../../img/cilantro.jpg";
import carrot from "../../img/carrot.jpg";

export const Plants = () => {
	return (
		<>
			<hr />
			<div className="card-deck m-3 text-center">
				<div className="card border-success">
					<img src={cilantro} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Cilantro</h5>
					</div>
				</div>
				<div className="card border-success">
					<img src={carrot} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Carrots</h5>
					</div>
				</div>
				<div className="card border-success">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Arugula</h5>
					</div>
				</div>
			</div>
			<div className="card-deck m-3">
				<div className="card border-success">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Parsley</h5>
					</div>
				</div>
				<div className="card border-success">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Basil</h5>
					</div>
				</div>
				<div className="card border-success">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Broccoli</h5>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary text-center">Back home</button>
			</Link>
		</>
	);
};
