import { useGetEntriesQuery } from "../../../../services/Entries";

function Snacks() {
	const { data: entries } = useGetEntriesQuery();
	const date = new Date().toDateString();

	return (
		<div className="flex justify-center items-auto mt-0 px-8 pt-0 pb-0">
			<div className="text-center text-gray-800">
				<table className="min-w-full text-center text-md font-light">
					<thead className="border-b bg-neutral-800 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
						<tr>
							<th className="px-4">Name</th>
							<th className="px-4">Calories</th>
						</tr>
					</thead>
					<tbody className="bg-neutral-100 divide-y divide-neutral-200">
						{!entries ? (
							<></>
						) : (
							entries
								.filter((entry) => new Date(entry.date).toDateString() === date)
								.filter((entry) => entry.category === "snacks")
								.map((entry) => {
									return (
										<tr key={entry.id}>
											<td>{entry.name}</td>
											<td>{entry.calories}</td>
										</tr>
									);
								})
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Snacks;
