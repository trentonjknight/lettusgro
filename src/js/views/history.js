import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

const History = props => {
	return (
		<>
			<div className="text-center">
				<h1>Grow Operation History</h1>
			</div>
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
