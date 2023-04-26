import {
  Input,
  Button,
  Typography,
  Option,
  Select,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  handleNameChange,
  handleCategoryChange,
  handleCalorieChange,
  reset,
  error,
} from "../../features/entries/newEntriesSlice";
import UsdaMeals from "./UsdaMeals";
import { useCreateEntryMutation } from "../../services/Entries";
function MealForm() {
  const [createEntry] = useCreateEntryMutation();
  const dispatch = useDispatch();
  const { fields } = useSelector((state) => state.newEntry);
  const [search, setSearch] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await createEntry(fields);
    if (resp.error) {
      dispatch(error(resp.error.data.detail));
    } else {
      dispatch(reset());
    }
  };
  return (
    <div className="flex justify-center items-auto mt-0 px-8 pt-1 pb-0">
      <div className="bg-transparent shadow-none rounded px-8 pt-0 pb-0 mb-6 min-h-content">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-center mt-0 text-3xl"
        >
          Log a Meal Entry
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Food Name"
              onChange={(e) => dispatch(handleNameChange(e.target.value))}
              value={fields.name}
              required
            />
            <div className="pb-1 pt-0 flex justify-center mt-[-4px]">
              <Button className="mt-0" onClick={(e) => setSearch(!search)}>
                search
              </Button>
            </div>
            <Input
              size="lg"
              label="Calories"
              onChange={(e) => dispatch(handleCalorieChange(e.target.value))}
              value={fields.calories}
              required
            />
            <Select
              size="md"
              label="Select Meal Category"
              onChange={(e) => dispatch(handleCategoryChange(e))}
              value={fields.category}
              required
            >
              <Option value="breakfast">Breakfast</Option>
              <Option value="lunch">Lunch</Option>
              <Option value="dinner">Dinner</Option>
              <Option value="snacks">Snacks</Option>
            </Select>
          </div>
          <div className="pb-1 pt-0 mb-16 flex justify-center mt-0">
            <Button className="mt-0" type="submit">
              Add
            </Button>
          </div>
        </form>
      </div>
      <div className="overflow-y-auto mt-12 ">
        {!search ? <></> : <UsdaMeals></UsdaMeals>}
      </div>
    </div>
  );
}
export default MealForm;
