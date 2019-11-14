import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 bg-success text-center text-light">
		<p>
			LETTUS 2019 Designed By{" "}
			<a className="footer-link" href="https://github.com/trentonjknight">
				Trenton
			</a>{" "}
			and{" "}
			<a className="footer-link" href="https://github.com/audioryan9">
				Ryan
			</a>
			<div className="text-muted">
				Icons made by{" "}
				<a className="text-muted" href="https://www.flaticon.com/authors/freepik" title="Freepik">
					Freepik
				</a>{" "}
				from{" "}
				<a className="text-muted" href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</div>
		</p>
	</footer>
);
