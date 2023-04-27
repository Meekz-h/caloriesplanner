import { Card, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import MealChart from "./MealCharts";
import Breakfast from "./categories/Breakfast";
import Lunch from "./categories/Lunch";
import Dinner from "./categories/Dinner";
import Snacks from "./categories/Snacks";
import { useGetEntriesQuery } from "../../../services/Entries";

function AuthMainPage() {
	const { data: entries } = useGetEntriesQuery();
	const date = new Date().toDateString();
	const [cards, setCards] = useState(false);

	let total_cal = 0;
	if (entries) {
		entries
			.filter((entry) => new Date(entry.date).toDateString() === date)
			.map((entry) => (total_cal += entry.calories));
	}

	const handleCards = () => {
		if (cards === false) {
			setCards(true);
		} else {
			return;
		}
	};
	if (total_cal > 0) {
		handleCards();
	}
	return (
		<>
			<div className="container my-24 px-6 mx-auto">
				<div className="flex font-medium justify-end items-center mt-5 px-[5%] ">
					<div className="ml-auto log-meal-date">
						<h2>Date: {date}</h2>
					</div>
				</div>
				<Card>
					<MealChart />
				</Card>
			</div>
			{cards ? (
				<div className="container my-24 px-6 mx-auto">
					<Card>
						<div className="text-center font-bold justify-center text-2xl">
							Today's Meals
						</div>
						<div className="pt-5">
							<div className="pb-5">
								<Card className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-orange-300">
									<h1 className="text-2xl font-bold mb-4">Breakfast</h1>
									<div className="flex items-center justify-center mb-6">
										<Breakfast />
									</div>
								</Card>
							</div>
							<div className="pb-5">
								<Card className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-orange-300">
									<h1 className="text-2xl font-bold mb-4">Lunch</h1>
									<div className="flex items-center justify-center mb-6">
										<Lunch />
									</div>
								</Card>
							</div>
							<div className="pb-5">
								<Card className="bg-gray-100 rounded-lg shadow-lg p-6  hover:bg-orange-300">
									<h1 className="text-2xl font-bold mb-4">Dinner</h1>
									<div className="flex items-center justify-center mb-6">
										<Dinner />
									</div>
								</Card>
							</div>
							<div className="pb-5">
								<Card className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-orange-300">
									<h1 className="text-2xl font-bold mb-4">Snacks</h1>
									<div className="flex items-center justify-center mb-6">
										<Snacks />
									</div>
								</Card>
							</div>
						</div>
						<Card>
							<div className="flex items-center justify-center mb-6">
								<div className="font-bold text-black">
									<div className=" hover:text-orange-300">
										Total CAL: {total_cal}
									</div>
								</div>
							</div>
						</Card>
					</Card>
				</div>
			) : (
				<div>
					<Card className="container my-24 px-6 mx-auto">
						No meals for the day
						<div className="flex justify-center items-center">
							<Link to="/meals">
								<Button>Log a Meal</Button>
							</Link>
						</div>
					</Card>
				</div>
			)}
		</>
	);
}
export default AuthMainPage;
