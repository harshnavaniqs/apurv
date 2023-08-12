import React from "react";
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
const Card = (props) => {
	return (
		<div>
			<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
				<div className="flex justify-between">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						{props.data.id}
					</h5>
					<div className="flex-shrink-0">
						<img
							className="w-8 h-8 rounded-full"
							src={faker.image.avatar()}
							alt="user"
						/>
					</div>
				</div>
				<p className="font-normal text-gray-700">{props.data.title}</p>
				<p>{props.data.tag}</p>
				<i class="fa-solid fa-triangle-exclamation"></i>
			</div>
		</div>
	);
};

export default Card;
