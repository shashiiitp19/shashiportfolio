import './ExpenseFilter.css'
const ExpenseFilter=(props)=>{
    const onExpenseFilterHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    };
    return <div className="expensefilter">
        <div className="expensefilter__contorl">
            <label>Filter by Year</label>
            <select value={props.fixedYear} onChange={onExpenseFilterHandler}>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
        </div>
    </div>
};
export default ExpenseFilter;