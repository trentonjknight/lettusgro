import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Plants } from "./views/plants";
import { Singlecrop } from "./views/singlecrop";
import { Mainview } from "./views/mainview";
import Selection from "./views/cilantro";
import Register from "./views/register";
import { About } from "./views/about";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

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
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/plants" component={Plants} />
						<Route path="/details" component={Singlecrop} />
						<Route path="/mainview" component={Mainview} />
						<Route path="/selection/:id" component={Selection} />
						<Route path="/register" component={Register} />
						<Route path="/about" component={About} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
