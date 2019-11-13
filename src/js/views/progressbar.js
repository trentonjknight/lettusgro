import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { ProgressBar, Step } from "react-step-progress-bar";
// import stepperplant from "../../img/progressstep1.png";

import { Context } from "../store/appContext";
// function tempF() {
//  setCount(count + 50);
// }
export const Progressbar = () => {
	const [count, setCount] = useState(0);
	const { store, actions } = useContext(Context);
	// if (this.state.activePlayer === 2) {
	//      setTimeout(function() {
	//          test();
	//      }, 5000);
	//  }
	function test() {
		setCount(count + 25);
		if (count >= 100) {
			setCount(0);
		}
	}
	function counter() {
		setTimeout(test, 2000);
	}

	return (
		<>
			<div className="container">
				<ProgressBar percent={75} filledBackground="linear-gradient(to right, #f2e6ff, #8000ff)" />
				<br />
				<ProgressBar percent={count} filledBackground="linear-gradient(to right, #f2e6ff, #8000ff)">
					{store.progressbar.map((item, index) => {
						return (
							<Step key={index} transition="scale">
								{({ accomplished }) => (
									<img
										style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
										width={item.width}
										src={item.image}
									/>
								)}
							</Step>
						);
					})}
				</ProgressBar>
				<div onClick={counter} className="btn btn-dark mt-5">
					Begin
				</div>
			</div>
		</>
	);
};
