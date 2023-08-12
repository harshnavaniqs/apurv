import React from "react";
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
const Card = (props) => {
	return (
		<div>
			<a
				href="#"
				className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<div className="flex justify-between">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{props.data.id}
					</h5>
					<div className="flex-shrink-0">
						<img
							className="w-8 h-8 rounded-full"
							src={faker.image.avatar()}
							alt="Neil image"
						/>
					</div>
				</div>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					{props.data.title}
				</p>
				<p>{props.data.tag}</p>
				<i class="fa-solid fa-triangle-exclamation"></i>
			</a>
		</div>
	);
};

export default Card;
