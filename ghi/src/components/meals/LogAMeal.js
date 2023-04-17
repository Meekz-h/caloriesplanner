import MealForm from "./MealForm";
import { Select, Option, Button } from "@material-tailwind/react";
import { useState } from "react";
function LogAMeal() {
    const [ clicked, setClicked ] = useState(false)
    const handleFormClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <div class="pb-5 pt-5 flex justify-center">
            <Button onClick={handleFormClick}>{!clicked ? ("Add Meal Item") : ("Hide")}</Button>
            </div>
            {!clicked ? (<></>):( <MealForm></MealForm>)}
            <div>
            <Select size="md" label="Filter Meal Category">
                <Option>Breakfast</Option>
                <Option>Lunch</Option>
                <Option>Dinner</Option>
                <Option>Snacks</Option>
            </Select>
            </div>
        </>
    );
}
export default LogAMeal
