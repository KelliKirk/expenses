import './ExpenseForm.css'
import './NewExpense.css'
import { useState, useRef, Fragment } from 'react'
import Error from '../UI/Error'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [error, setError] = useState(null)
  
    const titleInputRef = useRef()
    const amountInputRef = useRef()
    const dateInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value

        if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title or amount or date (non-empty values)'
            })
            return
        }     

        const expenseData = {
            title: enteredTitle,
            amount: parseFloat(enteredAmount),
            date: new Date(enteredDate)
        } 
        
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    } 

    const errorHandler = () => {
        setError(null)
    }  

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    } 

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    } 

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    } 

    return (
        <Fragment>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />   
            )}

            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input 
                            type="text"
                            onChange={titleChangeHandler}
                            value={enteredTitle}
                            ref={titleInputRef} 
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input 
                            type="number" 
                            min="0.01" 
                            step="0.01"
                            onChange={amountChangeHandler}
                            value={enteredAmount}
                            ref={amountInputRef}   
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input 
                            type="date" 
                            min="2025-01-09" 
                            step="2026-01-31"
                            onChange={dateChangeHandler} 
                            value={enteredDate}
                            ref={dateInputRef}  
                        />
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                        <button type="button" onClick={props.onCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
} 

export default ExpenseForm