import React, { useState } from "react";
import ExpenseList from "./NewExpense/ExpenseList";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
//import Expenseschart from "./Expenseschart";

import "./Experiment.css";
const Experiment = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const onChangeFilterHandler = (getFilterYear) => {
    setSelectedYear(getFilterYear);
  };
  const FilteredYears = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  //console.log(props.expenses);
  
  return (
    <div className="experiment">
      <ExpenseFilter
        fixedYear={selectedYear}
        onChangeFilter={onChangeFilterHandler}
      />
      {/* <Expenseschart expenses={filteredExpenses}/> */}
      <ExpenseList items = {FilteredYears}/>
    </div>
  );
};
export default Experiment;
