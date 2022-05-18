import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import { Body } from "../component/body";
import { Navigation } from "../Home/navigation";
import { Masthead } from "../Home/masthead";
import { About } from "../Home/about";
import { Services } from "../Home/services";
import { Contact } from "../Home/contact";
import { Footer } from "../Home/footer";

export const Home = () => (
	<>
    <Navigation />
    <Masthead />
    <About />
    <Services />
    <Contact />
    <Footer />
	</>
);
