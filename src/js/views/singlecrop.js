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
				<p className="lead">
					Daucus carota subsp. sativus
					{"     "}
				</p>
				<hr className="my-4" />
				<p>
					<table className="table singlecrop , responsive , card border-success">
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
								<td>
									<div>
										<video loop autoPlay id="myVideo" width="60%" controls>
											{/* <source src={carrotgreens} type="video/mp4" /> */}
										</video>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</p>
				<a className="btn btn-dark text-light btn-lg" href="#" role="button">
					Plant New
				</a>
			</div>
		</>
	);
};
