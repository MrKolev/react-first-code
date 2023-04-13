import { useState } from 'react';
import Card from "../UI/Card.jsx";
import ExpenseItem from "./ExpenseItem.jsx"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter.jsx";


function Expenses(props) {
    const [filtedYear, setFiltedYear] = useState('2020');

    function  filterChangedHandler(selectYear) {
        setFiltedYear(selectYear);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filtedYear} onChangeFilter={filterChangedHandler} />
            <ExpenseItem
                title={props.item[0].title}
                amount={props.item[0].amount}
                date={props.item[0].date}
            ></ExpenseItem>
        </Card>

    )
}

export default Expenses