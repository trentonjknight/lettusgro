import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carrot from "../../img/carrot.jpg";
import seedling from "../../img/seedling.png";
// import carrotgreens from "../../img/greens.mp4";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Singlecrop = props => {
	const { store } = useContext(Context);
	let plant = store.plants[props.match.params.theid].common_name;
	let species = store.plants[props.match.params.theid].scientific_name;
	let tempmin = store.plants[props.match.params.theid].temperature_minimum;
	let tempmax = store.plants[props.match.params.theid].temperature_maximum;
	let daystm = store.plants[props.match.params.theid].days_to_maturity;
	let phmin = store.plants[props.match.params.theid].ph_minimum;
	let phmax = store.plants[props.match.params.theid].ph_maximum;
	let height = store.plants[props.match.params.theid].mature_height;
	let water = store.plants[props.match.params.theid].water;
	let pairings = store.plants[props.match.params.theid].pairings;

	return (
		<>
			<div className="details, mt-10">
				<div
					style={{
						backgroundImage:
							"url('https://www.almanac.com/sites/default/files/image_nodes/carrots-table_popidar-ss.jpg')"
					}}
					className="singlecrop responsive"
				/>
			</div>
			<div className="jumbotron">
				<h1 className="display-4">{plant}</h1>
				<p className="lead" />
				<hr className="my-4" />

				<div className="container">
					<div className="row">
						<div className="col-lg">
							<table className="table singlecrop responsive card border-success ogregreen">
								<thead>
									<tr />
								</thead>
								<tbody>
									<tr>
										<tr>
											<th scope="row">Difficulty:</th>
											<td>
												<img src={seedling} width="25px" height="20px" />
												<img src={seedling} width="25px" height="20px" />
												<img src={seedling} width="25px" height="20px" />
											</td>
										</tr>
										<tr>
											<th scope="row">Scientific Name:</th>
											<td>{species}</td>
										</tr>
										<tr>
											<th scope="row">Days to maturity:</th>
											<td>{daystm}</td>
										</tr>
										<tr>
											<th scope="row">Mature height:</th>
											<td>{height}</td>
										</tr>
										<tr>
											<th scope="row">pH Balance:</th>
											<td>
												{phmin} - {phmax}
											</td>
										</tr>
										<tr>
											<th scope="row">Temperature Range:</th>
											<td>
												Between {tempmin} - {tempmax} degrees Fahrenheit
											</td>
										</tr>
										<tr>
											<th scope="row">Water requirements:</th>
											<td>{water}</td>
										</tr>
										<tr>
											<th scope="row">Germination:</th>
											<td />
										</tr>
										<tr>
											<th scope="row">Pairings:</th>
											<td> {pairings} </td>
										</tr>
										<td />
									</tr>
								</tbody>
							</table>
							<div className="d-flex justify-content-center mb-4">
								<a className="btn btn-success btn-lg mr-4" href="#" role="button">
									Start New {plant} Harvest!
								</a>
								<Link to="/plants">
									<a className="btn btn-success btn-lg" href="#" role="button">
										Return to Plants
									</a>
								</Link>
							</div>
						</div>
						<div className="col-lg">
							<div className="video-container">
								<iframe
									width="100%"
									height="315"
									src="https://www.youtube.com/embed/qlmgO3O55L4"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
Selection.propTypes = {
	match: PropTypes.object
};
