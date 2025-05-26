import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card' 
import { useState } from 'react' 

const ExpenseItem = (props) => {
    return(
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.data.date} />
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__amount'>{props.data.amount}</div>
            </div>
        </Card>
        </li>
    )
} 

export default ExpenseItem