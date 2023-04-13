import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({onSaveExpenseData,cancelEditingHandler}) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmuunt, setEnteredAmuunt] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
    const amuuntChangeHandler = (event) => setEnteredAmuunt(event.target.value);
    const dateChangeHandler = (event) => setEnteredDate(event.target.value);

    const submitHandler = (e) => {
        e.preventDefault();

        
        const expandedData = {
            title: enteredTitle,
            amount: +enteredAmuunt,
            date: new Date(enteredDate)
        }

       onSaveExpenseData(expandedData);

       setEnteredTitle("");
       setEnteredAmuunt("");
       setEnteredDate("");
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__control" >
                <div className="new-expense__control" >
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control" >
                    <label>Amuunt</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmuunt} onChange={amuuntChangeHandler} />
                </div>
                <div className="new-expense__control" >
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions" >
                    <button type="button" onClick={cancelEditingHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm