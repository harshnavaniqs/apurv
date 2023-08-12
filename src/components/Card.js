import React from "react";

const Card = (props) => {
	return (
		<div>
			<a
				href="#"
				class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<div className="flex flex-row">
					<div class="flex-shrink-0">
						<img
							class="w-8 h-8 rounded-full"
							src="/docs/images/people/profile-picture-1.jpg"
							alt="Neil image"
						/>
					</div>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{props.id}
					</h5>
				</div>
				<p class="font-normal text-gray-700 dark:text-gray-400">
					{props.title}
				</p>
			</a>
		</div>
	);
};

export default Card;
