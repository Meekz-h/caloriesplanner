import { useState } from "react";

import { useGetEntriesQuery } from "../../services/Entries";


function MealHistory(filter) {
    const { data: entries } = useGetEntriesQuery();
    const [searchMeals, setSearch] = useState([]);
    let category = filter.categoryFilter
    let date = filter.dateFilter.toDateString()
    let total_cal = 0;

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

                    {!entries ? (<></>) : ((category === "all") ? (
                            entries.filter((entry) => new Date(entry.date).toDateString() === date).map((entry) => {
                            total_cal += entry.calories
                    return (
                        <tr key={entry.id}>
                            <td>{entry.name}</td>
                            <td>{entry.calories}</td>
                            <td>{entry.category}</td>
                            <td>{new Date(entry.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                        </tr>)})) :

                            (entries.filter((entry) => new Date(entry.date).toDateString() === date).filter(entry => entry.category === category).map((entry) => {
                            total_cal += entry.calories
                            return (
                                <tr key={entry.id}>
                                    <td>{entry.name}</td>
                                    <td>{entry.calories}</td>
                                    <td>{entry.category}</td>
                                    <td>{new Date(entry.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                    </tr>)
                            })))}
                        <tr>
                            <td>{total_cal}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </>
    )
}
export default MealHistory;
