import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Register from "./Home/register";
import { About } from "./Home/about";
import { Services } from "./Home/services";
import { Contact } from "./Home/contact";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>				
					<Routes>
						<Route path="/" element={<Home />}/>
						<Route path="/about" element={<About />}/>
						<Route path="/services" element={<Services />}/>
						<Route path="/contact" element={<Contact />}/>
						<Route path="/register" element={<Register />}/>
						<Route path="*" element={<h1>Not found!</h1>}/>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
