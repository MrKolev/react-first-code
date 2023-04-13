import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

function NewExpense(props) {
const [isEditing, setIsEditing] = useState(true)

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
        props.onAddExpense(expenseData)
        setIsEditing(true)
    }

    const startEditingHandler = () => {
        setIsEditing(false)
    }
    const cancelEditingHandler = () => {
        setIsEditing(true)
    }


    return (
        <div className="new-expense">
            {isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {!isEditing &&<ExpenseForm 
            onSaveExpenseData={onSaveExpenseDataHandler} 
            cancelEditingHandler={cancelEditingHandler}
            />}
        </div>)
};

export default NewExpense