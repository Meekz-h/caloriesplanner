import { Button } from "@material-tailwind/react";

import {
	useGetEntriesQuery,
	useDeleteEntryMutation,
} from "../../services/Entries";

function MealHistory(filter) {
	const { data: entries } = useGetEntriesQuery();
	const [deleteEntry] = useDeleteEntryMutation();
	let category = filter.categoryFilter;
	let date = filter.dateFilter.toDateString();
	let total_cal = 0;
	const handleDelete = (e) => {
		deleteEntry(e.target.value);
	};
	return (
		<>
			<div className="flex justify-center items-auto mt-0 px-8 pt-6 pb-0">
				<div className="text-center text-gray-800">
					<table className="min-w-full text-center text-sm font-light">
						<thead className="border-b bg-neutral-800 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
							<tr>
								<th scope="col" className="px-4 m">
									Name
								</th>
								<th className="px-4">Calories</th>
								<th className="px-4">Category</th>
								<th className="px-4">Date</th>
							</tr>
						</thead>
						<tbody className="bg-neutral-100 divide-y divide-neutral-200">
							{!entries ? (
								<></>
							) : category === "all" ? (
								entries
									.filter(
										(entry) => new Date(entry.date).toDateString() === date
									)
									.map((entry) => {
										total_cal += entry.calories;
										return (
											<tr key={entry.id}>
												<td>{entry.name}</td>
												<td>{entry.calories}</td>
												<td>{entry.category}</td>
												<td className="px-3 py-1">
													{new Date(entry.date).toLocaleString("en-US", {
														year: "numeric",
														month: "long",
														day: "numeric",
													})}
												</td>
												<td>
													<Button
														size="sm"
														value={entry.id}
														onClick={handleDelete}
														className="px-3 py-1"
													>
														Delete
													</Button>
												</td>
											</tr>
										);
									})
							) : (
								entries
									.filter(
										(entry) => new Date(entry.date).toDateString() === date
									)
									.filter((entry) => entry.category === category)
									.map((entry) => {
										total_cal += entry.calories;
										return (
											<tr key={entry.id}>
												<td>{entry.name}</td>
												<td>{entry.calories}</td>
												<td>{entry.category}</td>
												<td>
													{new Date(entry.date).toLocaleString("en-US", {
														year: "numeric",
														month: "long",
														day: "numeric",
													})}
												</td>
												<td>
													<Button value={entry.id} onClick={handleDelete}>
														Delete
													</Button>
												</td>
											</tr>
										);
									})
							)}
							<tr colSpan="3" className="px-4 mt-[10%] mb-5">
								<td className="font-bold">Total Calories</td>
								<td className="text-center font-bold">{total_cal}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
export default MealHistory;
