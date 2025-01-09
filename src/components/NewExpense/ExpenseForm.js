import './ExpenseForm.css'
import './NewExpense.css'
import { useState } from 'react'

const ExpenseForm = (props) => {

    const submitHandler = (event) => {
        event.preventDefault()
        console.log('Form submitted')
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)


        } 
        console.log(expenseData)
        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')
    } 

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    console.log(enteredTitle, enteredPrice, enteredDate)
  

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    } 

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    } 

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    } 

return (
    <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input 
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}  /></div>
        <div className="new-expense__control">
            <label>Price</label>
            <input 
            type="number" 
            min="0.01" 
            step="0.01"
            onChange={priceChangeHandler}
            value={enteredPrice}  />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input 
            type="date" 
            min="2025-01-09" 
            step="2026-01-31"
            onChange={dateChangeHandler} 
            value={enteredDate} />
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </div>
    </form>
)
} 

export default ExpenseForm