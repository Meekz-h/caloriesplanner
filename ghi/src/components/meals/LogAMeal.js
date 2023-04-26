import { Select, Option, Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import MealHistory from "./MealHistory";
import MealForm from "./MealForm";
function LogAMeal() {
  const [clicked, setClicked] = useState(false);
  const [categoryFilter, setCategory] = useState("all");
  const [dateFilter, setDate] = useState(new Date());
  const handleFormClick = () => {
    setClicked(!clicked);
  };
  const handleCategory = (e) => {
    setCategory(e);
  };
  const handleDate = (e) => {
    let date = new Date(e.target.value + " ");
    setDate(date);
  };
  if (isNaN(dateFilter)) {
    setDate(new Date());
  }
  return (
    <>
      <div className="flex font-bold  justify-end items-center mt-5 px-[5%] ">
        <div className="ml-auto log-meal-date">
          {dateFilter.toLocaleDateString()}
        </div>
      </div>
      <div className="pb-1 pt-5 mb-10 flex justify-center mt-0">
        <Button onClick={handleFormClick}>
          {!clicked ? "Add Meal Item" : "Hide"}
        </Button>
      </div>
      {!clicked ? <></> : <MealForm></MealForm>}
      <div className="flex justify-center items-center mt-0">
        <div className="flex-grow-1 flex-shrink-0 w-[50%]">
          <Select
            size="md"
            label="Filter Meal Category"
            className="ml-0 mb-0"
            onChange={handleCategory}
          >
            <Option value="all">All</Option>
            <Option value="breakfast">Breakfast</Option>
            <Option value="lunch">Lunch</Option>
            <Option value="dinner">Dinner</Option>
            <Option value="snacks">Snacks</Option>
          </Select>
        </div>
        <div className="flex-grow-0 flex-shrink-0 ml-5">
          <Input type="date" onChange={handleDate}></Input>
        </div>
      </div>
      <div className="mb-[30%] mt-5">
        <MealHistory categoryFilter={categoryFilter} dateFilter={dateFilter} />
      </div>
    </>
  );
}
export default LogAMeal;
