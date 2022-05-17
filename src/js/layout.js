import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
<<<<<<< HEAD
import Register from "./Home/register";
import Login from "./Home/login";
import { About } from "./Home/about";
import { Services } from "./Home/services";
import { Contact } from "./Home/contact";
import { Workspace } from "./component/Workspace/workspace";

=======
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Register from "./component/register";
import  Login  from "./component/login";
>>>>>>> e64cafaf3d6b94bc90dff23b5533e6c38f75fcb3

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
<<<<<<< HEAD
						<Route path="/workspace" element={<Workspace />}/>
						<Route path="/about" element={<About />}/>
						<Route path="/services" element={<Services />}/>
						<Route path="/contact" element={<Contact />}/>
						<Route path="/register" element={<Register />}/>
						<Route path="/login" element={<Login />}/>
						<Route path="*" element={<h1>Not found!</h1>}/>
=======
						
						<Route path="/register" element={<Register />}/>
						
						<Route path="*" element={<h1>Not found!</h1>}/>

						<Route path="/login" element={<Login />}/>
						
>>>>>>> e64cafaf3d6b94bc90dff23b5533e6c38f75fcb3
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
