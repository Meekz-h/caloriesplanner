import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select,
} from "@material-tailwind/react";

function MealForm() {
    return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Log a Meal Entry
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Food Name" />
          <Input size="lg" label="Calories" />
          <Select size="md" label="Select Meal Category">
            <Option>Breakfast</Option>
            <Option>Lunch</Option>
            <Option>Dinner</Option>
            <Option>Snacks</Option>
          </Select>
        </div>
        <Button className="mt-6" fullWidth>
          Add
        </Button>
      </form>
    </Card>
  );
}

export default MealForm
