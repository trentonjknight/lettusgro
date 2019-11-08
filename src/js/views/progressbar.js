import React, { useState } from "react";
import "../../styles/home.scss";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import stepperplant from "../../img/progressstep.png";
// function tempF() {
//  setCount(count + 50);
// }
export const Progressbar = () => {
	const [count, setCount] = useState(0);
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
					<Step transition="scale">
						{({ accomplished }) => (
							<img
								style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
								width="30"
								src={stepperplant}
							/>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<img
								style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
								width="30"
								src={stepperplant}
							/>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<img
								style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
								width="30"
								src={stepperplant}
							/>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<img
								style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
								width="30"
								src={stepperplant}
							/>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<img
								style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
								width="30"
								src={stepperplant}
							/>
						)}
					</Step>
				</ProgressBar>
				<div onClick={counter} className="btn btn-success mt-5">
					Test
				</div>
			</div>
		</>
	);
};
