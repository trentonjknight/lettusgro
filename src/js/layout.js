import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

//import { Home } from "./views/home";
//import { Gauges } from "./views/gauges";
//import { Progressbar } from "./views/progressbar";
import { Login } from "./views/login";
import { Plants } from "./views/plants";
import { Singlecrop } from "./views/singlecrop";
import { Cropmonitor } from "./views/cropmonitor";
import Selection from "./views/plantselection";
import Register from "./views/register";
import { About } from "./views/about";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Smoothscroll } from "./views/smoothscroll";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Smoothscroll} />
						<Route path="/login" component={Login} />
						<Route path="/plants" component={Plants} />
						<Route path="/details/:theid" component={Singlecrop} />
						<Route path="/cropmonitor/:index" component={Cropmonitor} />
						<Route path="/selection/:id" component={Selection} />
						<Route path="/register" component={Register} />
						<Route path="/about" component={About} />
						{/* <Route path="/smooth" component={Smoothscroll} /> */}
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
