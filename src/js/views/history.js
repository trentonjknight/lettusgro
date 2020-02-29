import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const History = props => {
	return (
		<>
			<div className="text-center">
				<h1>Grow Operation History</h1>
			</div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
			<div className="mx-auto m-3">
				<Link to="/history">
					<button className="btn btn-success">Back Home</button>
				</Link>
			</div>
		</>
	);
};
// History.propTypes = {
// 	match: PropTypes.object
// };
export default History;
