import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Newproject } from "./component/Workspace/newproject";
import Register from "./Home/register";
import Login from "./Home/login";
import { About } from "./Home/about";
import { Services } from "./Home/services";
import { Contact } from "./Home/contact";
import { Workspace } from "./component/Workspace/workspace";
import { Offcanvas } from "./component/Workspace/offcanvas";

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
						<Route path="/workspace" element={<Workspace />}/>
						<Route path="/about" element={<About />}/>
						<Route path="/services" element={<Services />}/>
						<Route path="/contact" element={<Contact />}/>
						<Route path="/newproject" element={<Newproject />}/>
						<Route path="/register" element={<Register />}/>
						<Route path="/login" element={<Login />}/>
						<Route path="*" element={<h1>Not found!</h1>}/>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
