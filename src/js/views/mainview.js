import React from "react";
import Gauges from "./gauges";

export const Mainview = () => {
	return (
		<>
			<table className="table table-dark text-light mt-5">
				<thead>
					<tr>
						<th scope="col">Harvest</th>
						<th scope="col">Life Cycle</th>
						<th scope="col">Temperature</th>
						<th scope="col">Phbalance</th>
						<th scope="col">Light</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Celery</th>
						<td>(progressbar)</td>
						<td>
							<Gauges color="blue" />
						</td>
						<td>
							<Gauges color="red" />
						</td>
						<td>
							<Gauges />
						</td>
					</tr>
					<tr>
						<th scope="row">Carrots</th>
						<td>(progressbar)</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">Arugula</th>
						<td>(progressbar)</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
