import { useState } from 'react';
import Card from "../UI/Card.jsx";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter.jsx";
import { ExpensesList } from './ExpensesList.jsx';
import { ExpensesChart } from './ExpensesChart.jsx';


function Expenses({ items }) {
    const [filtedYear, setFiltedYear] = useState('2020');

    function filterChangedHandler(selectYear) {
        setFiltedYear(selectYear);
    }

    const filterItems = items.filter(item => {
        return item.date.getFullYear().toString() === filtedYear;
    });


    return (
        <li>
            <Card className="expenses">
            <ExpensesChart expenses={filterItems} />
                <ExpensesFilter
                    selectedYear={filtedYear}
                    onChangeFilter={filterChangedHandler} />
                <ExpensesList filterItems={filterItems} />
            </Card>
        </li>

    )
}

export default Expenses