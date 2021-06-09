import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron jumbotron-fluid m-2">
			<div className="container">
				<h1 className="display-4">A warm welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Integer eu enim felis. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae;
					Pellentesque eget erat quis odio maximus pretium.
					Suspendisse potenti. Curabitur eu nisi ac sapien egestas
					placerat. Mauris semper tempus rhoncus.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg font-weight-bold"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
		</div>
	);
}
