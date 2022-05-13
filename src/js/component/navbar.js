import React from "react";
import { Link } from "react-router-dom";
import oderlyImage from "../../img/Orderly-Navbar.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
			<Link to="/">
				<img src={oderlyImage} />
			</Link>
				<button
					className="navbar-toggler "
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarButtonsExample"
					aria-controls="navbarButtonsExample"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				<div className="collapse navbar-collapse justify-content-between mx-5" id="navbarButtonsExample">
				<div className="d-flex align-items-center">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link text-white" to="#">About</Link>
						</li>
					</ul>
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link text-white" to="#">Service</Link>
						</li>
					</ul>
					<ul className="navbar-nav mb-2 mb-lg-0 ">
						<li className="nav-item">
							<Link className="nav-link text-white" to="#">Contact</Link>
						</li>
					</ul>
					</div>
					<div className="d-flex align-items-center d-grid gap-2">
						<button type="button" className="btn btn-outline-light border-3">
							Login
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
