import { Select, Option, Button } from "@material-tailwind/react";
import { useState } from "react";

import MealHistory from "./MealHistory";
import MealForm from "./MealForm";


function LogAMeal() {
  const [clicked, setClicked] = useState(false);
  const [categoryFilter, setCategory] = useState("all")
  const handleFormClick = () => {
    setClicked(!clicked);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  
  return (
    <>
      <div className="pb-5 pt-5 mb-0 flex justify-center mt-0">
        <Button onClick={handleFormClick}>
          {!clicked ? "Add Meal Item" : "Hide"}
        </Button>
      </div>
      {!clicked ? <></> : <MealForm></MealForm>}
      <select
        size="md"
        label="Filter Meal Category"
        className="ml-0 mb-0"
        onChange={handleCategory}
      >
        <option value="all">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
      </select>
      <MealHistory categoryFilter={categoryFilter} />
    </>
  );
}
export default LogAMeal;
