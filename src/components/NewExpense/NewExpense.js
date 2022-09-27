//import ExpenseItem from "../ExpenseItem";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
const NewExpense = (props) => {
  const[isClicked, setIsClicked] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newexpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(newexpenseData);
    props.onSaveNewExpense(newexpenseData);
    setIsClicked(false);
  };
  const ButtonHandler=()=>{
    setIsClicked(true);
  };
  const stopAddHandler=()=>{
    //console.log("Cancel");
    setIsClicked(false);
  };

  return (
    <div className="new-expense">
      {!isClicked && <button onClick={ButtonHandler}>Add New Expenses</button>}
      {isClicked && <ExpenseForm onsaveExpenseData={saveExpenseDataHandler}
      onCancel={stopAddHandler} />}
    </div>
  );
};
export default NewExpense;
