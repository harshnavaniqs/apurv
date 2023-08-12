import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Page = () => {
	const [data, setData] = useState([]);
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
			{/* <h1>{ticdata.id}</h1> */}
			{console.log("hiii")}
			{/* {console.log(ticdata)} */}
			{/* {data.tickets?.length > 0 && (
				<ul>
					{data.tickets?.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			)} */}
			{data.tickets?.map((tic) => (
				<div className="mb-3">
					<Card tic />
				</div>
			))}
		</div>
	);
};

export default Page;
