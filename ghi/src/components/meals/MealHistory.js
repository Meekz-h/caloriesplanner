import { useState } from "react";

import {
    useGetEntriesQuery,
    useDeleteEntryMutation,
} from "../../services/Entries";
import { Button } from "@material-tailwind/react";

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
        <div>
            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Calories</th>
                <th>Category</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {!entries ? (
                <></>
                ) : category === "all" ? (
                entries
                    .filter((entry) => new Date(entry.date).toDateString() === date)
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
                ) : (
                entries
                    .filter((entry) => new Date(entry.date).toDateString() === date)
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
                <tr>
                <td>{total_cal}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </>
    );
}
export default MealHistory;
