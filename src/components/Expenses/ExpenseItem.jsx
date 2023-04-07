import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.jsx';

import './ExpenseItem.css'

function ExpenseItem(props) {

   const [title, satTitle] = useState(props.title);
   
    const clickBtn = () => {
        satTitle("Update!");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div  className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickBtn}>chenge</button>
        </Card>
    )
}

export default ExpenseItem;