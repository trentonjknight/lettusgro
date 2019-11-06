import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//assets
import cilantro from "../../img/cilantro.jpg";
import carrot from "../../img/carrot.jpg";
import arugula from "../../img/arugula.jpg";
import parsley from "../../img/parsley.jpg";
import basil from "../../img/basil.jpg";
import broccoli from "../../img/broccoli.jpg";

export const Plants = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<hr />
			<h1 className="mx-auto mt-5">What would you like to grow?</h1>
			<div className="container">
				<div className="row">
					{store.plants.map((item, index) => {
						return (
							<div key={index} className="col-md-4 m-1">
								<div className="card border-success">
									<Link to={"/cilantro/" + index}>
										<div className="card-header">
											<h3 className="card-title">{item.common_name}</h3>
										</div>
										<div className="card-body">
											<img src={item.link} className="card-img-top" alt="..." />
										</div>
										<div className="card-footer" />
									</Link>
								</div>
							</div>
						);
					})}
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
