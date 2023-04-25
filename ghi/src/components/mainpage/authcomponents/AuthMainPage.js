import { Card, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import MealChart from "./MealCharts";
import Breakfast from "./categories/Breakfast";
import Lunch from "./categories/Lunch";
import Dinner from "./categories/Dinner";
import Snacks from "./categories/Snacks";

import { useGetEntriesQuery } from "../../../services/Entries";


function AuthMainPage() {
    const { data: entries } = useGetEntriesQuery();
    const date = new Date().toDateString();
    let total_cal = 0
    if (entries) {
        entries.filter((entry) => new Date(entry.date).toDateString() === date)
            .map((entry) => { total_cal += entry.calories })
    }
    return (
        <>
            <div className="container my-24 px-6 mx-auto">
                <div>
                    <h2>Date</h2>
                </div>
                <Card>Charts
                    <MealChart />
                </Card>
            </div>
            <div className="container my-24 px-6 mx-auto">
                <Card>Today's Meals
                    <div>
                    <Card className="pt-6">
                        Breakfast
                        <Breakfast/>
                    </Card>
                    <Card className="pt-6">
                        Lunch
                        <Lunch/>
                    </Card>
                    <Card className="pt-6">
                        Dinner
                        <Dinner/>
                    </Card>
                    <Card className="pt-6">
                        Snacks
                        <Snacks/>
                    </Card>
                    </div>
                    Total CAL:{total_cal}
                </Card>
            </div>
            <div>
                <Card className="container my-24 px-6 mx-auto">No meals for the day
                <div className="flex justify-center items-center">
                    <Link to='/meals'>
                        <Button >Log a Meal</Button>
                    </Link>
                </div>
                </Card>
            </div>
        </>
    );

}
export default AuthMainPage;
