import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import { useState } from 'react'

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        } 
        props.onAddExpense(expenseData)
        setEditForm(false) // vormi sulgemine pärast andmete salvestamist
    } 

    const startEditingHandler = () => {
        setEditForm(true); // Avab vormi
    }

    const stopEditingHandler = () => {
        setEditForm(false); // Sulgeb vormi
    }



    return(
        <div className="new-expense">
            {!editForm && (
                <button onClick={startEditingHandler}>Add New Expense</button> // Kuvab ainult, kui vorm on suletud
            )}
            {editForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler} // Cancel nupp
                />
            )}

        </div>
    )
} 

export default NewExpense