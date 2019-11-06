import React from "react";
import { Link } from "react-router-dom";
import carrot from "../../img/carrot.jpg";
import seedling from "../../img/seedling.png";

export const Singlecrop = () => {
	return (
		<>
			<div className="details, mt-10">
				<div
					style={{
						backgroundImage:
							"url('https://www.almanac.com/sites/default/files/image_nodes/carrots-table_popidar-ss.jpg')"
					}}
					className="singlecrop , responsive , card border-success"
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
										<video width="320" height="240" controls>
											<source src="movie.mp4" type="video/mp4" />
											<source src="movie.ogg" type="video/ogg" />
											Your browser does not support the video tag.
										</video>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</>
	);
};

{
	/*<table className="table singlecrop , responsive , card border-success">
	<thead>
		<tr>
			<th scope="col">Species: </th>
			<th scope="col">Lifecycle:</th>
			<th scope="col">Temperature min/max:</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Species:</th>
			<td>Carotus</td>
		</tr>
		<tr>
			<th scope="row">Lifecycle:</th>
			<td>70 to 80 days until maturity</td>
		</tr>
		<tr>
			<th scope="row">Temperature min/max:</th>
			<td>Between 60 and 70 degrees Fahrenheit</td>
		</tr>
	</tbody>
</table>;*/
}
