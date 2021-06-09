//import react into the bundle
import React, { Component } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar } from "./component/Navbar.js";
import { Jumbotron } from "./component/Jumbotron";
import { Card } from "./component/Cards.js";

//render your react application
ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<Jumbotron />
		<Card />
	</React.Fragment>,
	document.querySelector("#app")
);
