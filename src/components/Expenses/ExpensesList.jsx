import ExpenseItem from "./ExpenseItem.jsx"
import './ExpensesList.css'


export function ExpensesList({ filterItems }) {

    if (filterItems.length === 0) return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    
    return (
        <ul className="expenses-list">
            {filterItems.map(x => (
                <ExpenseItem
                    key={x.id}
                    title={x.title}
                    amount={x.amount}
                    date={x.date}
                />
            ))}
        </ul>
    );

}