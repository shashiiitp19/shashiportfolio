//import ExpenseItem from "./components/ExpenseItem";
import React, {useState} from 'react';
import Experiment from "./components/Experiment";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMYEXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setallExpenses] = useState(DUMMYEXPENSES);
  
  const newExpenseData=(newAddedData)=>{
   //console.log(expenses);
    //convert into integer const a_mount = parseInt(newAddedData.amount);
    newAddedData.amount = parseInt(newAddedData.amount);
    newAddedData.date = new Date(newAddedData.date);
    //expenses.push(newAddedData);
    setallExpenses(prevData=>{
      return [newAddedData, ...prevData];
    });
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={newExpenseData}/>
      <Experiment item = {expenses}/>
    </div>
  );
}

export default App;
