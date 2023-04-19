import { useState } from "react";
import { useGetEntriesQuery } from "../../services/Entries";


function MealHistory(categoryFilter) {
    const { data: entries } = useGetEntriesQuery();
    const [searchMeals, setSearch] = useState([]);

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Calories</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>

                    {!entries ? (<></>) : ((categoryFilter.categoryFilter === "all") ? (
                        entries.map((entry) => {
                    return (
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.calories}</td>
                            <td>{entry.category}</td>
                        </tr>)})) :

                        (entries.filter(entry => entry.category === categoryFilter.categoryFilter).map((entry) => {
                            return (
                                <tr>
                                    <td>{entry.name}</td>
                                    <td>{entry.calories}</td>
                                    <td>{entry.category}</td>
                                </tr>)})))}
                    </tbody>
                </table>
            </div>
    </>
    )
}
export default MealHistory;
