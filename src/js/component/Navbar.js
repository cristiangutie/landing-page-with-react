import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Navbar() {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand text-info font-weight-bolder" href="/">
				<img
					src={rigoImage}
					alt="Logo"
					width="36"
					height="36"
					className="vertical-align-middle"
				/>
			</a>
			<button
				className="custom-toggler navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarsExample09"
				aria-controls="navbarsExample09"
				aria-expanded={!isNavCollapsed ? true : false}
				aria-label="Toggle navigation"
				onClick={handleNavCollapse}>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className={`${
					isNavCollapsed ? "collapse justify-content-end" : ""
				} navbar-collapse`}
				id="navbarsExample09">
				<a className="nav-link text-white" href="/home">
					Home
				</a>
				<a className="nav-link text-white" href="/about">
					About
				</a>
				<a className="nav-link text-white" href="/service">
					Service
				</a>
				<a className="nav-link text-white" href="/contact">
					Contact
				</a>
			</div>
		</nav>
	);
}
