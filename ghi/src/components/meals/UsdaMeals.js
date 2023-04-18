import {
    Input,
    Button,
} from "@material-tailwind/react";

import { useGetUsdaMealsQuery } from "../../services/Entries";
import { useSelector, useDispatch } from "react-redux";
import { handleNameChange,handleCalorieChange } from "../../features/entries/newEntriesSlice";

function UsdaMeals() {
    const { fields } = useSelector((state) => state.newEntry);
    const { data: foods } = useGetUsdaMealsQuery(fields.name);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        if (e.target.getAttribute("name") === "calories") {
            dispatch(handleCalorieChange(e.target.getAttribute("value")))
        }
    }
    
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Calories</th>
              <th>Brand Name</th>
            </tr>
          </thead>
          <tbody>
            {!foods ? (
              <></>
            ) : (
              foods.slice(0,10).map((food) => {
                return (
                  <tr key={foods.indexOf(food)} onClick={handleClick}>
                    <td value={food.name} >{food.name}</td>
                    <td value={food.calories} name="calories">{food.calories}</td>
                    <td value={food.brandname}>{food.brand_name}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </>
    );
}
export default UsdaMeals;
