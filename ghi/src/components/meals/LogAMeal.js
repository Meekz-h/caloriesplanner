import { Select, Option, Button, Input } from "@material-tailwind/react";
import { useState } from "react";

import MealHistory from "./MealHistory";
import MealForm from "./MealForm";

function LogAMeal() {
	const [clicked, setClicked] = useState(false);
	const [categoryFilter, setCategory] = useState("all");
	const [dateFilter, setDate] = useState(new Date());
	const handleFormClick = () => {
		setClicked(!clicked);
	};

	const handleCategory = (e) => {
		setCategory(e);
	};
	const handleDate = (e) => {
		let date = new Date(e.target.value + " ");
		setDate(date);
	};

	if (isNaN(dateFilter)) {
		setDate(new Date());
	}
	return (
		<>
			<div className="pb-5 pt-5 mb-0 flex justify-center mt-0">
				<Button onClick={handleFormClick}>
					{!clicked ? "Add Meal Item" : "Hide"}
				</Button>
			</div>
			{!clicked ? <></> : <MealForm></MealForm>}
			<Select
				size="md"
				label="Filter Meal Category"
				className="ml-0 mb-0"
				onChange={handleCategory}
			>
				<Option value="all">All</Option>
				<Option value="breakfast">Breakfast</Option>
				<Option value="lunch">Lunch</Option>
				<Option value="dinner">Dinner</Option>
				<Option value="snacks">Snacks</Option>
			</Select>
			<div>{dateFilter.toLocaleDateString()}</div>
			<Input type="date" onChange={handleDate}></Input>
			<MealHistory categoryFilter={categoryFilter} dateFilter={dateFilter} />
		</>
	);
}
export default LogAMeal;
