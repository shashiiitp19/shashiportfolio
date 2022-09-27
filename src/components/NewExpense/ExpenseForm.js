import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  
  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
    //console.log(event.target.value);
  };
  const chaneDateHandler = (event) => {
    setEnteredDate(event.target.value);
    //console.log(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    //console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: enteredDate,
      amount: enteredAmount,
    };
    props.onsaveExpenseData(expenseData);
    //console.log(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2016-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={chaneDateHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">AddExpense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
