import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="text-center text-dark bg-dark">
		<div className="container pt-2">
			<section className="mb-2">
				<Link
					className="btn btn-link btn-floating btn-lg text-white m-1"
					to="#!"
					role="button"
					data-mdb-ripple-color="white"
				><i className="fab fa-facebook-f"></i></Link>
				<Link
					className="btn btn-link btn-floating btn-lg text-white m-1"
					to="#!"
					role="button"
					data-mdb-ripple-color="white"
				><i className="fab fa-twitter"></i></Link>
				<Link
					className="btn btn-link btn-floating btn-lg text-white m-1"
					to="#!"
					role="button"
					data-mdb-ripple-color="white"
				><i className="fab fa-google"></i></Link>
				<Link
					className="btn btn-link btn-floating btn-lg text-white m-1"
					to="#!"
					role="button"
					data-mdb-ripple-color="white"
				><i className="fab fa-instagram"></i></Link>
				<Link
					className="btn btn-link btn-floating btn-lg text-white m-1"
					to="#!"
					role="button"
					data-mdb-ripple-color="white"
				><i className="fab fa-linkedin"></i></Link>
				<Link
					className="btn btn-link btn-floating btn-lg text-white m-1"
					to="#!"
					role="button"
					data-mdb-ripple-color="white"
				><i className="fab fa-github"></i></Link>
			</section>
		</div>
		<div className="text-center text-white bg-dark m-2">
			<span className="text-white"> © 2022 Copyright: Oderly-Tech</span>
		</div>
	</footer>
);
