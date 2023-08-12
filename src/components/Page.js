import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Page = () => {
	const [data, setData] = useState([]);
	const [sortBy, setSortBy] = useState("title");
	const [tics, setTics] = useState(data);
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

	const sortTickets = (key) => {
		const sortedTickets = [...tics.tickets].sort((a, b) => {
			if (key === "title") {
				return a.title.localeCompare(b.title);
			}
			if (key === "priority") {
				return a.priority - b.priority;
			}
			return 0;
		});

		setTics(sortedTickets);
		console.log(tics);
	};

	const handleSortChange = (event) => {
		const selectedValue = event.target.value;
		setSortBy(selectedValue);
		sortTickets(selectedValue);
	};

	return (
		<div>
			<select
				value={sortBy}
				onChange={handleSortChange}
				className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
			>
				<option value="title">Title</option>
				<option value="priority">Priority</option>
			</select>
			{/* <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
				<option>SM</option>
				<option>M</option>
				<option>L</option>
				<option>XL</option>
			</select> */}

			{tics.tickets?.map((ticket) => (
				<div className="mb-3">
					<Card data={ticket} />
				</div>
			))}

			{/* {data.tickets?.length > 0 && (
				<ul>
					{data.tickets?.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			)} */}

			{/* {data.tickets?.map((ticket) => (
				<div className="mb-3">
					<Card data={ticket} />
				</div>
			))} */}
		</div>
	);
};

export default Page;
