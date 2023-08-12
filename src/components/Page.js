import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
	const [ticdata, setData] = useState([]);
	const apiUrl = "https://apimocha.com/quicksell/data";

	useEffect(() => {
		axios
			.get(apiUrl)
			.then((response) => {
				setData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);
	return (
		<div>
			{/* <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
				<option>SM</option>
				<option>M</option>
				<option>L</option>
				<option>XL</option>
			</select>
			<select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
				<option>SM</option>
				<option>M</option>
				<option>L</option>
				<option>XL</option>
			</select> */}
			<h1>{ticdata.id}</h1>
			{console.log("hiii")}
			{console.log(ticdata)}
			{ticdata.length > 0 && (
				<ul>
					{ticdata.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			)}
			{/* {data.map((tic) => (
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
							{tic.id}
						</h5>
					</div>
					<p class="font-normal text-gray-700 dark:text-gray-400">...</p>
				</a>
			))} */}
		</div>
	);
};

export default Page;
