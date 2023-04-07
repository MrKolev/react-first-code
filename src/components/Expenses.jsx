import Card from "./Card.jsx"
import ExpenseItem from "./ExpenseItem.jsx"
import './Expenses.css'


function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.item[0].title}
                amount={props.item[0].amount}
                date={props.item[0].date}
            ></ExpenseItem>
        </Card>
    )
}

export default Expenses