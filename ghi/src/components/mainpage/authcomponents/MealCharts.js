import React from "react";
import { Chart } from "react-google-charts";

import { useGetEntriesQuery } from "../../../services/Entries";
import { useGetAccountQuery } from "../../../services/Entries";


export const options = {
  title: "Weekly Caloric Intake",
  vAxis: { title: "Total Calories" },
  hAxis: { title: "Day", direction: "-1" },
  seriesType: "bars",
  series: {1 : { type: "line" } },
};

function MealCharts() {
	const { data: entries } = useGetEntriesQuery();
	const { data: account } = useGetAccountQuery();
	const data = [["Date", "Total Calories", "Goal"]]
	const today = new Date()
	const week = new Date();
	week.setDate(week.getDate() - 8);
	if(entries){
		for (let i = 0; i < 7; i++){
			let date = new Date();
			date.setDate(date.getDate() - i);
			let total_cal = 0

			entries.filter((entry) => new Date(entry.date).toDateString() === date.toDateString())
			.map((entry) => (total_cal += entry.calories));
			data.push([date.toDateString(), total_cal, account.goal])

		}
	}

	console.log("data", data)
	return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default MealCharts;
