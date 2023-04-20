import { Card, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import MealChart from "./MealCharts";

function AuthMainPage() {
    return (
        <>
            <div>
                <div>
                    <h2>Date</h2>
                </div>
                <Card>Charts
                    <MealChart />
                </Card>
            </div>
            <div>
                <Card>Meals History
                    <div>

                    <Card>Breakfast</Card>
                    <Card>Lunch</Card>
                    <Card>Dinner</Card>
                    <Card>Snacks</Card>
                    </div>
                </Card>
            </div>
            <div>
                <Card>No meals for the day
                    <Link to='/meals'>
                        <Button>Log a Meal</Button>
                    </Link>
                </Card>
            </div>
        </>
    );
}
export default AuthMainPage
