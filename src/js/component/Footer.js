import React from "react";

export function Footer() {
	return (
		<footer className="fixed-bottom py-4 bg-dark text-white-50">
			<div className="container text-center">
				<small>
					Copyright &copy; {new Date().getFullYear()} Lading Page with
					React!
				</small>
			</div>
		</footer>
	);
}
