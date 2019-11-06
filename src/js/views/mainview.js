import React from "react";
import Gauges from "./gauges";

export const Mainview = () => {
	return (
		<>
			<table className="table table-dark text-light mt-5">
				<thead>
					<tr>
						<th scope="col">Day</th>
						<th scope="col">Harvest</th>
						<th scope="col">Temperature</th>
						<th scope="col">Phbalance</th>
						<th scope="col">Light</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Celery</td>
						<td>
							<Gauges />
						</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
