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
			<h1 className="mx-auto mt-5 pgtitles">What would you like to grow?</h1>
			<div className="container">
				<div className="row">
					{store.plants.map((item, index) => {
						return (
							<div key={index} className="col-4 mb-4 text-center">
								<div className="card bg-light border-dark" style={{ border: "3px solid grey" }}>
									<Link to={"/cilantro/" + index}>
										<div>
											<img src={item.url} width="100%" height="100%" alt="..." />
										</div>
										<div className="card-footer card-text text-dark" style={{ fontSize: "23px" }}>
											{item.common_name}
										</div>
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
