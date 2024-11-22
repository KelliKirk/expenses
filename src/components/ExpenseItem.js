// ExpenseItem.js
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    console.log(props.date);
    const day = props.date.toLocaleString('en-US', {day: '2-digit'} )
    const month = props.date.toLocaleString('en-US', {month: 'long'} )
    const year = props.date.getFullYear()
    
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;