import MealForm from "./MealForm";
import { Select, Option, Button, Typography, Card} from "@material-tailwind/react";
import { useState } from "react";



function LogAMeal() {
    const [clicked, setClicked] = useState(false);
    const handleFormClick = () => {
        setClicked(!clicked);
    };
    return (
        <>
            <div className="pb-5 pt-5 mb-0 flex justify-center mt-0">
            <Button onClick={handleFormClick}>
                {!clicked ? "Add Meal Item" : "Hide"}
            </Button>
            </div>
            {!clicked ? <></> : <MealForm></MealForm>}
            <Select size="md" label="Filter Meal Category" className="ml-0 mb-0">
                <Option>Breakfast</Option>
                <Option>Lunch</Option>
                <Option>Dinner</Option>
                <Option>Snacks</Option>
            </Select>
        </>
    );
}
export default LogAMeal;
