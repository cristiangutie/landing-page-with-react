import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Card() {
	return (
		<div className="card m-2">
			<img
				src="https://via.placeholder.com/500x325"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h3 className="card-title text-center font-weight-bold">
					Card title
				</h3>
				<p className="card-text text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Integer eu enim felis.
				</p>
			</div>
			<div className="card-footer bg-white d-flex justify-content-center">
				<a
					className="btn btn-primary btn-lg font-weight-bold"
					href="#"
					role="button">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
