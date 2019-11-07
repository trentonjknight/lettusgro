import React from "react";
import { Link } from "react-router-dom";
import carrot from "../../img/carrot.jpg";
import seedling from "../../img/seedling.png";
// import carrotgreens from "../../img/greens.mp4";
export const Singlecrop = () => {
	return (
		<>
			<div className="details, mt-10">
				<div
					style={{
						backgroundImage:
							"url('https://www.almanac.com/sites/default/files/image_nodes/carrots-table_popidar-ss.jpg')"
					}}
					className="singlecrop responsive card border-success"
				/>
			</div>
			<div className="jumbotron">
				<h1 className="display-4">Carrots</h1>
				<p className="lead">Daucus carota subsp. sativus</p>
				<hr className="my-4" />

				<div className="container">
					<div className="row">
						<div className="col-lg">
							<table className="table singlecrop responsive card border-success">
								<thead>
									<tr />
								</thead>
								<tbody>
									<tr>
										<tr>
											<th scope="row">Difficulty:</th>
											<td>
												<img src={seedling} width="20px" height="20px" />
												<img src={seedling} width="20px" height="20px" />
												<img src={seedling} width="20px" height="20px" />
											</td>
										</tr>
										<tr>
											<th scope="row">Species:</th>
											<td>Carotus</td>
										</tr>
										<tr>
											<th scope="row">Lifecycle:</th>
											<td>70 to 80 days until maturity</td>
										</tr>
										<tr>
											<th scope="row">Temperature Range:</th>
											<td>Between 60 and 70 degrees Fahrenheit</td>
										</tr>
										<tr>
											<th scope="row">Precipitation:</th>
											<td>Between 60 and 70 degrees Fahrenheit</td>
										</tr>
										<tr>
											<th scope="row">Germination:</th>
											<td>Between 60 and 70 degrees Fahrenheit</td>
										</tr>
										<tr>
											<th scope="row">Days to maturity:</th>
											<td>Between 60 and 70 degrees Fahrenheit</td>
										</tr>
										<td />
									</tr>
								</tbody>
							</table>
							<div className="d-flex justify-content-center mb-4">
								<a className="btn btn-success btn-lg mr-4" href="#" role="button">
									Start New Carrot Harvest!
								</a>
								<a className="btn btn-success btn-lg" href="#" role="button">
									Return to Plants
								</a>
							</div>
						</div>
						<div className="col-lg">
							<div className="video-container">
								<iframe
									width="560"
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
