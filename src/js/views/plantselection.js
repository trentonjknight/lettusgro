import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function Selection(props) {
	const { store } = useContext(Context);
	let plant = store.plants[props.match.params.id].common_name;
	return (
		<>
			<div className="mx-auto mt-3">
				<div className="mt-1 mx-auto">
					<h1>You have chosen {plant}!</h1>
					<h2 className="text-center">Choose type:</h2>
					<div className="mx-auto">
						<Link to={"/details/" + props.match.params.id} className="btn btn-success text-light m-1">
							Microgreen
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

Selection.propTypes = {
	match: PropTypes.object
};
export default Selection;
