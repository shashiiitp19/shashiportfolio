import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      <div className="expense-item">
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
          <h3>{props.title}</h3>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </li>
  );
};
export default ExpenseItem;
